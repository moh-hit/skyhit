import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const SPOTIFY_RATE_LIMIT = {
  limit: 30,
  windowMs: 60_000,
};
const ACCESS_TOKEN_TTL_BUFFER_MS = 60_000;
const NOW_PLAYING_CACHE_TTL_MS = 15_000;

let accessTokenCache:
  | {
      token: string;
      expiresAt: number;
    }
  | null = null;

let nowPlayingCache:
  | {
      data: { isPlaying: false } | {
        isPlaying: boolean;
        title: string;
        artist: string;
        albumImageUrl?: string;
        songUrl: string;
      };
      expiresAt: number;
    }
  | null = null;

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function getBaseHeaders() {
  return {
    "Cache-Control": "public, s-maxage=15, stale-while-revalidate=45",
  };
}

async function getAccessToken(): Promise<string | null> {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) return null;

  if (accessTokenCache && accessTokenCache.expiresAt > Date.now()) {
    return accessTokenCache.token;
  }

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    "base64"
  );

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
    cache: "no-store",
  });

  if (!res.ok) return null;
  const data = await res.json();
  const accessToken = data.access_token ?? null;

  if (accessToken) {
    accessTokenCache = {
      token: accessToken,
      expiresAt:
        Date.now() +
        Math.max((data.expires_in ?? 3600) * 1000 - ACCESS_TOKEN_TTL_BUFFER_MS, 0),
    };
  }

  return accessToken;
}

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const limit = rateLimit(`spotify:${ip}`, SPOTIFY_RATE_LIMIT);

  if (!limit.ok) {
    const retryAfter = Math.max(
      1,
      Math.ceil((limit.resetAt - Date.now()) / 1000)
    );

    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: {
          ...getBaseHeaders(),
          "Retry-After": `${retryAfter}`,
        },
      }
    );
  }

  if (nowPlayingCache && nowPlayingCache.expiresAt > Date.now()) {
    return NextResponse.json(nowPlayingCache.data, {
      headers: getBaseHeaders(),
    });
  }

  const accessToken = await getAccessToken();

  if (!accessToken) {
    const data = { isPlaying: false } as const;
    nowPlayingCache = {
      data,
      expiresAt: Date.now() + NOW_PLAYING_CACHE_TTL_MS,
    };

    return NextResponse.json(data, {
      headers: getBaseHeaders(),
    });
  }

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (res.status === 204 || res.status >= 400) {
    const data = { isPlaying: false } as const;
    nowPlayingCache = {
      data,
      expiresAt: Date.now() + NOW_PLAYING_CACHE_TTL_MS,
    };

    return NextResponse.json(data, {
      headers: getBaseHeaders(),
    });
  }

  const song = await res.json();

  if (!song?.item) {
    const data = { isPlaying: false } as const;
    nowPlayingCache = {
      data,
      expiresAt: Date.now() + NOW_PLAYING_CACHE_TTL_MS,
    };

    return NextResponse.json(data, {
      headers: getBaseHeaders(),
    });
  }

  const data = {
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: (song.item.artists as { name: string }[])
      .map((a) => a.name)
      .join(", "),
    albumImageUrl: (
      song.item.album.images as { url: string }[]
    )[0]?.url,
    songUrl: song.item.external_urls.spotify,
  };

  nowPlayingCache = {
    data,
    expiresAt: Date.now() + NOW_PLAYING_CACHE_TTL_MS,
  };

  return NextResponse.json(data, {
    headers: getBaseHeaders(),
  });
}

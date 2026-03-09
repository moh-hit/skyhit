import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const USERNAME = "moh-hit";
const GITHUB_RATE_LIMIT = {
  limit: 60,
  windowMs: 60_000,
};

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function getBaseHeaders() {
  return {
    "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
  };
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const limit = rateLimit(`github:${ip}`, GITHUB_RATE_LIMIT);

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

  try {
    const eventsRes = await fetch(
      `https://api.github.com/users/${USERNAME}/events/public?per_page=30`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 300 },
      }
    );

    if (!eventsRes.ok) {
      return NextResponse.json(
        { error: "GitHub API error" },
        {
          status: 500,
          headers: getBaseHeaders(),
        }
      );
    }

    const events: {
      type: string;
      repo: { name: string };
      payload: { head?: string; ref?: string };
      created_at: string;
    }[] = await eventsRes.json();

    // GitHub strips commits from public events payload — find the head SHA instead
    const push = events.find((e) => e.type === "PushEvent" && e.payload?.head);

    if (!push || !push.payload.head) {
      return NextResponse.json(
        { error: "No recent pushes" },
        {
          status: 404,
          headers: getBaseHeaders(),
        }
      );
    }

    // Fetch the actual commit message via SHA
    const commitRes = await fetch(
      `https://api.github.com/repos/${push.repo.name}/commits/${push.payload.head}`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 300 },
      }
    );

    const repoShort = push.repo.name.replace(`${USERNAME}/`, "");

    if (!commitRes.ok) {
      // Still return something useful even without the message
      return NextResponse.json(
        {
          repo: repoShort,
          message: "recent changes",
          timeAgo: timeAgo(push.created_at),
          repoUrl: `https://github.com/${push.repo.name}`,
        },
        {
          headers: getBaseHeaders(),
        }
      );
    }

    const commit = await commitRes.json();
    const message = (commit.commit?.message as string | undefined)
      ?.split("\n")[0] ?? "recent changes";

    return NextResponse.json(
      {
        repo: repoShort,
        message,
        timeAgo: timeAgo(push.created_at),
        repoUrl: `https://github.com/${push.repo.name}`,
      },
      {
        headers: getBaseHeaders(),
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch" },
      {
        status: 500,
        headers: getBaseHeaders(),
      }
    );
  }
}

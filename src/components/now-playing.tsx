"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IconBrandSpotify } from "@tabler/icons-react";

type NowPlayingData =
  | { isPlaying: false }
  | {
      isPlaying: true;
      title: string;
      artist: string;
      albumImageUrl?: string;
      songUrl: string;
    };

function PlayingBars() {
  return (
    <span className="inline-flex items-end gap-[2px] h-3">
      <span className="w-[3px] bg-emerald-500 rounded-sm animate-[spotify-bar1_1s_ease-in-out_infinite]" />
      <span className="w-[3px] bg-emerald-500 rounded-sm animate-[spotify-bar2_1s_ease-in-out_infinite]" />
      <span className="w-[3px] bg-emerald-500 rounded-sm animate-[spotify-bar3_1s_ease-in-out_infinite]" />
    </span>
  );
}

export default function NowPlaying() {
  const [data, setData] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const res = await fetch("/api/spotify");
        if (!res.ok) return;
        const json: NowPlayingData = await res.json();
        setData(json);
      } catch {
        // silently fail — non-critical widget
      }
    }

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 30_000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  if (!data.isPlaying) {
    return (
      <div className="inline-flex items-center gap-3 border border-border bg-secondary/40 rounded-xl px-3 py-2.5 w-fit">
        <div className="shrink-0 w-9 h-9 rounded-md bg-muted flex items-center justify-center">
          <IconBrandSpotify className="h-4 w-4 text-muted-foreground/40" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest leading-none">
            Spotify
          </span>
          <span className="font-mono text-sm text-muted-foreground leading-tight">
            probably debugging in silence
          </span>
        </div>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-3 border border-border hover:border-primary/30 bg-secondary/40 hover:bg-secondary/70 rounded-xl px-3 py-2.5 transition-all duration-300 w-fit"
    >
      {/* Album art */}
      {data.albumImageUrl ? (
        <div className="relative shrink-0 w-9 h-9 rounded-md overflow-hidden">
          <Image
            src={data.albumImageUrl}
            alt="Album art"
            fill
            sizes="36px"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="shrink-0 w-9 h-9 rounded-md bg-muted flex items-center justify-center">
          <IconBrandSpotify className="h-4 w-4 text-muted-foreground" />
        </div>
      )}

      {/* Track info */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="flex items-center gap-1.5">
          <IconBrandSpotify className="h-3 w-3 text-emerald-500 shrink-0" />
          <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest leading-none">
            Now Playing
          </span>
        </div>
        <span className="font-mono text-sm text-foreground leading-tight truncate max-w-[160px]">
          {data.title}
        </span>
        <span className="font-mono text-xs text-muted-foreground leading-tight truncate max-w-[160px]">
          {data.artist}
        </span>
      </div>

      {/* Animated bars */}
      <PlayingBars />
    </a>
  );
}

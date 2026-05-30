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
      <div className="flex w-full overflow-hidden rounded-md border border-border bg-card/60">
        <span className="w-1 self-stretch bg-muted-foreground/30 shrink-0" />
        <div className="flex-1 min-w-0 px-3 py-2">
          <div className="flex items-center gap-1.5 mb-1 font-mono text-[10px] lowercase tracking-widest text-muted-foreground/70">
            <IconBrandSpotify className="h-3 w-3 text-muted-foreground/50 shrink-0" />
            <span>spotify</span>
            <span className="ml-auto tracking-normal text-muted-foreground/40">
              idle
            </span>
          </div>
          <p className="font-mono text-xs text-muted-foreground truncate">
            probably debugging in silence
          </p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noreferrer"
      className="group flex w-full overflow-hidden rounded-md border border-border bg-card/60 hover:border-primary/40 transition-colors duration-300"
    >
      <span className="w-1 self-stretch bg-emerald-500/70 shrink-0" />

      {/* Album art */}
      {data.albumImageUrl && (
        <div className="relative w-11 self-stretch shrink-0">
          <Image
            src={data.albumImageUrl}
            alt="Album art"
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex-1 min-w-0 px-3 py-2">
        <div className="flex items-center gap-1.5 mb-1 font-mono text-[10px] lowercase tracking-widest">
          <IconBrandSpotify className="h-3 w-3 text-emerald-500 shrink-0" />
          <span className="text-emerald-500">now playing</span>
          <span className="ml-auto">
            <PlayingBars />
          </span>
        </div>
        <p className="font-mono text-xs text-foreground truncate">
          {data.title}
        </p>
        <p className="font-mono text-[11px] text-muted-foreground truncate">
          {data.artist}
        </p>
      </div>
    </a>
  );
}

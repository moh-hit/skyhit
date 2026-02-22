"use client";

import { useEffect, useState } from "react";
import { IconBrandGithub, IconGitCommit } from "@tabler/icons-react";

type LatestCommit = {
  repo: string;
  message: string;
  timeAgo: string;
  repoUrl: string;
};

export default function GitHubActivity() {
  const [data, setData] = useState<LatestCommit | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((json) => {
        if (!json.error) setData(json);
      })
      .catch(() => {});
  }, []);

  if (!data) return null;

  return (
    <a
      href={data.repoUrl}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-3 border border-border hover:border-primary/30 bg-secondary/40 hover:bg-secondary/70 rounded-xl px-3 py-2.5 transition-all duration-300 w-fit"
    >
      {/* Icon */}
      <div className="shrink-0 w-9 h-9 rounded-md bg-muted flex items-center justify-center">
        <IconGitCommit className="h-4 w-4 text-foreground" />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="flex items-center gap-1.5">
          <IconBrandGithub className="h-3 w-3 text-muted-foreground/60 shrink-0" />
          <span className="font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest leading-none">
            Hacking on
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/40 leading-none">
            · {data.timeAgo}
          </span>
        </div>
        <span className="font-mono text-sm text-foreground leading-tight">
          {data.repo}
        </span>
        <span className="font-mono text-xs text-muted-foreground leading-tight truncate max-w-[160px]">
          {data.message}
        </span>
      </div>
    </a>
  );
}

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
      className="group flex w-full overflow-hidden rounded-md border border-border bg-card/60 hover:border-primary/40 transition-colors duration-300"
    >
      {/* Accent strip */}
      <span className="w-1 self-stretch bg-primary/70 shrink-0" />

      <div className="flex-1 min-w-0 px-3 py-2">
        <div className="flex items-center gap-1.5 mb-1 font-mono text-[10px] lowercase tracking-widest text-muted-foreground/70">
          <IconGitCommit className="h-3 w-3 text-primary shrink-0" />
          <span>last commit</span>
          <span className="ml-auto tracking-normal text-muted-foreground/40">
            {data.timeAgo}
          </span>
        </div>
        <div className="flex items-center gap-1.5 min-w-0">
          <IconBrandGithub className="h-3 w-3 text-muted-foreground/50 shrink-0" />
          <span className="font-mono text-xs text-foreground truncate">
            {data.repo}
          </span>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground truncate mt-0.5">
          {data.message}
        </p>
      </div>
    </a>
  );
}

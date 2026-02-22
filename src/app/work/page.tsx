import { work, getYearsOfExperience } from "@/lib/work";
import { IconArrowUpRight, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function getDuration(joined: string, current: boolean): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const parts = joined.split(" ");
  const monthIndex = months.indexOf(parts[0]);
  const year = parseInt(parts[1]);
  const start = new Date(year, monthIndex);
  const end = current
    ? new Date()
    : (() => {
        const idx = work.findIndex((w) => w.joined === joined);
        if (idx > 0) {
          const prev = work[idx - 1].joined.split(" ");
          return new Date(parseInt(prev[1]), months.indexOf(prev[0]));
        }
        return new Date();
      })();

  const diffMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(diffMonths / 12);
  const remainingMonths = diffMonths % 12;

  if (years > 0 && remainingMonths > 0) return `${years}y ${remainingMonths}m`;
  if (years > 0) return `${years}y`;
  return `${remainingMonths}m`;
}

function WorkPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              &larr; Home
            </Link>
            <span className="text-border">/</span>
            <span className="font-mono text-sm text-muted-foreground">
              Work
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            WORK
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up delay-1">
            {`Over ${getYearsOfExperience()}+ years I've had the privilege of building products across
            fintech, gaming, SaaS, and real estate — always pushing the
            boundaries of what's possible on the web and mobile.`}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-primary/50 via-border to-transparent timeline-line" />
          </div>

          {/* Work entries */}
          <div className="flex flex-col">
            {work.map(
              (
                {
                  title,
                  position,
                  description,
                  image,
                  url,
                  joined,
                  stack,
                  current,
                },
                i,
              ) => (
                <div
                  key={title}
                  className="relative pl-14 md:pl-20 pb-16 md:pb-20 last:pb-0 group animate-fade-in-up"
                  style={{ animationDelay: `${0.15 * (i + 1)}s` }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-[0.625rem] md:left-[1.125rem] top-1 z-10">
                    {current ? (
                      <div className="relative">
                        <div className="w-5 h-5 rounded-full bg-primary border-4 border-background" />
                        <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary/40 animate-ping" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-secondary border-2 border-border group-hover:border-primary/50 transition-colors" />
                    )}
                  </div>

                  {/* Duration badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-xs text-muted-foreground bg-secondary border border-border px-2.5 py-1 rounded-md">
                      {joined}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {getDuration(joined, current)}
                    </span>
                    {current && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        PRESENT
                      </span>
                    )}
                  </div>

                  {/* Card */}
                  <div className="border border-border rounded-2xl p-6 md:p-8 hover:border-primary/20 transition-all duration-500 bg-card/30">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      {/* Company logo + link */}
                      <div className="flex-shrink-0">
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="block group/logo"
                        >
                          <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-secondary rounded-[1.25rem] overflow-hidden border border-border group-hover/logo:border-primary/30 transition-colors">
                            <Image
                              src={image}
                              alt={title}
                              fill
                              className="p-2 rounded-[1.25rem] overflow-hidden"
                            />
                          </div>
                        </a>
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h2 className="font-display text-xl md:text-2xl font-bold">
                            {title}
                          </h2>
                          <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors w-fit"
                          >
                            Visit
                            <IconArrowUpRight className="h-3 w-3" />
                          </a>
                        </div>

                        <p className="text-sm text-primary font-mono uppercase tracking-wider mb-4">
                          {position}
                        </p>

                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                          {description}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {stack.map(({ name }) => (
                            <span
                              key={name}
                              className="font-mono text-xs text-muted-foreground bg-secondary border border-border px-3 py-1.5 rounded-lg hover:border-primary/30 transition-colors"
                            >
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Career stats */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="animate-fade-in-up delay-2">
              <span className="font-display text-3xl md:text-4xl font-bold text-primary">
                {getYearsOfExperience()}+
              </span>
              <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                Years
              </p>
            </div>
            <div className="animate-fade-in-up delay-3">
              <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {work.length}
              </span>
              <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                Companies
              </p>
            </div>
            <div className="animate-fade-in-up delay-4">
              <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {
                  Array.from(
                    new Set(work.flatMap((w) => w.stack.map((s) => s.name))),
                  ).length
                }
              </span>
              <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                Technologies
              </p>
            </div>
            <div className="animate-fade-in-up delay-5">
              <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                3
              </span>
              <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                Industries
              </p>
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Back home
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            Read my blog
            <IconArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default WorkPage;

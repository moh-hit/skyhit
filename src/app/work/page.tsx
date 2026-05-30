import { work, getYearsOfExperience } from "@/lib/work";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function shortDate(joined: string): string {
  const [month, year] = joined.split(" ");
  const abbr = month?.slice(0, 3) ?? month;
  return `${abbr} ${year}`;
}

function endDate(idx: number): string {
  // work is ordered most-recent-first: the previous index is the next job,
  // whose start marks the end of this one.
  return idx > 0 ? shortDate(work[idx - 1].joined) : "now";
}

function WorkPage() {
  const techCount = Array.from(
    new Set(work.flatMap((w) => w.stack.map((s) => s.name))),
  ).length;

  const stats = [
    { value: `${getYearsOfExperience()}+`, label: "years", accent: true },
    { value: work.length, label: "companies" },
    { value: techCount, label: "technologies" },
    { value: 3, label: "industries" },
  ];

  return (
    <main>
      <div className="max-w-3xl mx-auto frame-x min-h-screen px-6 md:px-10 pt-28 md:pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-14">
          <Link href="/" className="hover:text-primary transition-colors">
            ~
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground">work</span>
        </div>

        {/* Header */}
        <header className="mb-16 md:mb-24 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold lowercase tracking-tight leading-none">
            work
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Over {getYearsOfExperience()}+ years building products across
            fintech, gaming, SaaS, and real estate — on web and mobile.
          </p>
        </header>

        {/* Entries */}
        <div>
          {work.map(
            ({ title, position, description, image, url, joined, stack, current }, i) => (
              <article
                key={title}
                className="group py-10 md:py-14 dashed-t first:border-t-0 first:pt-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                <div className="flex items-start gap-5">
                  {/* Logo */}
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 group/logo"
                  >
                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-border bg-secondary overflow-hidden flex items-center justify-center group-hover/logo:border-primary/40 transition-colors">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </a>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4 mb-1.5">
                      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          {title}
                          <IconArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                      </h2>
                      <span className="font-mono text-xs md:text-sm text-muted-foreground shrink-0 whitespace-nowrap">
                        {shortDate(joined)} —{" "}
                        {current ? (
                          <span className="text-primary">now</span>
                        ) : (
                          endDate(i)
                        )}
                      </span>
                    </div>

                    <p className="font-mono text-sm text-primary lowercase mb-5">
                      {position}
                    </p>

                    <p className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mb-5">
                      {description}
                    </p>

                    <p className="font-mono text-xs text-muted-foreground/60 leading-relaxed">
                      {stack.map((s) => s.name).join("  ·  ")}
                    </p>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        {/* Stats */}
        <div className="mt-20 pt-12 dashed-t flex flex-wrap gap-x-12 md:gap-x-16 gap-y-8">
          {stats.map(({ value, label, accent }) => (
            <div key={label}>
              <div
                className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${
                  accent ? "text-primary" : "text-foreground"
                }`}
              >
                {value}
              </div>
              <div className="font-mono text-xs text-muted-foreground mt-2 lowercase">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-6 dashed-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs lowercase">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            ← back home
          </Link>
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            read my blogs
            <IconArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default WorkPage;

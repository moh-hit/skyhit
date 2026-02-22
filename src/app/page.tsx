import LetsTalk from "@/components/lets-talk";
import { work, getYearsOfExperience } from "@/lib/work";
import { blogs } from "@/lib/blogs";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandAppleFilled,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/moh-hit",
    icon: IconBrandGithub,
  },
  {
    name: "Twitter",
    href: "https://x.com/mohitxnova",
    icon: IconBrandTwitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_moh.itoo_",
    icon: IconBrandInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/moh-it10/",
    icon: IconBrandLinkedin,
  },
  {
    name: "Discord",
    href: "https://discord.gg/Px9yUQCu",
    icon: IconBrandDiscord,
  },
  {
    name: "Email",
    href: "mailto:moh.hit1012@gmail.com",
    icon: IconMail,
  },
];

export default function Home() {
  const sortedBlogs = [...blogs]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 5);

  return (
    <main className="relative">
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 items-center">
            {/* Left — Content */}
            <div>
              {/* Status */}
              <div className="animate-fade-in-up delay-1 flex items-center gap-3 mb-8">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-mono text-sm text-muted-foreground tracking-wide">
                  Currently building at{" "}
                  <a
                    href="https://www.xurrent.com/incident-management-response"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Xurrent IMR
                  </a>
                </span>
              </div>

              {/* Name */}
              <h1 className="animate-fade-in-up delay-2 font-display font-bold leading-[0.85] tracking-tight text-foreground mb-6 text-[clamp(3.5rem,12vw,11rem)]">
                MOHIT
                <br />
                <span className="text-primary">KUMAR</span>
              </h1>

              {/* Subtitle */}
              <div className="animate-fade-in-up delay-4 max-w-xl mt-8 mb-10">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Senior Software Engineer with{" "}
                  <span className="text-foreground font-medium">{getYearsOfExperience()}+ years</span>{" "}
                  of experience building digital products across{" "}
                  <span className="text-foreground font-medium">React</span>,{" "}
                  <span className="text-foreground font-medium">
                    React Native
                  </span>
                  , and{" "}
                  <span className="text-foreground font-medium">Next.js</span>.
                </p>
              </div>

              {/* CTA */}
              <div className="animate-fade-in-up delay-5">
                <LetsTalk />
              </div>
            </div>

            {/* Right — Animated decoration (desktop only) */}
            <div className="hidden lg:block relative w-72 xl:w-80 h-[420px] animate-fade-in delay-3">
              {/* Horizontal lines */}
              <div className="absolute top-12 right-0 w-52 h-px bg-gradient-to-l from-primary/40 to-transparent hero-line" />
              <div
                className="absolute top-28 right-8 w-40 h-px bg-gradient-to-l from-border to-transparent hero-line"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-44 right-2 w-56 h-px bg-gradient-to-l from-primary/20 to-transparent hero-line"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute top-64 right-12 w-36 h-px bg-gradient-to-l from-muted-foreground/30 to-transparent hero-line"
                style={{ animationDelay: "3s" }}
              />
              <div
                className="absolute bottom-32 right-4 w-48 h-px bg-gradient-to-l from-primary/25 to-transparent hero-line"
                style={{ animationDelay: "4s" }}
              />

              {/* Vertical accent lines */}
              <div className="absolute top-8 right-20 w-px h-24 bg-gradient-to-b from-primary/30 to-transparent hero-line-pulse" />
              <div
                className="absolute top-36 right-44 w-px h-32 bg-gradient-to-b from-border to-transparent hero-line-pulse"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute bottom-20 right-28 w-px h-20 bg-gradient-to-b from-primary/20 to-transparent hero-line-pulse"
                style={{ animationDelay: "3.5s" }}
              />

              {/* Floating dots */}
              <div className="absolute top-20 right-36 w-1.5 h-1.5 rounded-full bg-primary/50 hero-dot" />
              <div
                className="absolute top-52 right-16 w-1 h-1 rounded-full bg-primary/40 hero-dot"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute bottom-40 right-48 w-1 h-1 rounded-full bg-muted-foreground/50 hero-dot"
                style={{ animationDelay: "4s" }}
              />

              {/* Crosshair element */}
              <div className="absolute top-1/2 right-24 -translate-y-1/2">
                <div className="relative w-16 h-16 hero-crosshair opacity-20">
                  <div className="absolute top-0 left-1/2 w-px h-full bg-primary/60 -translate-x-1/2" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-primary/60 -translate-y-1/2" />
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 border border-primary/60 rounded-full -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-4 right-0 w-6 h-6 border-t border-r border-primary/20 animate-fade-in delay-5" />
              <div className="absolute bottom-4 right-0 w-6 h-6 border-b border-r border-primary/20 animate-fade-in delay-6" />
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-border/40 animate-fade-in delay-7" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6 md:mx-10" />

      {/* ── Experience ── */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              EXPERIENCE
            </h2>
            <span className="font-mono text-sm text-muted-foreground">
              {String(work.length).padStart(2, "0")} roles
            </span>
          </div>

          <div className="flex flex-col">
            {work.map(({ title, position, url, joined, current }, i) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 py-6 md:py-8 border-t border-border hover:bg-secondary/30 -mx-4 px-4 transition-all duration-300"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="font-mono text-xs text-muted-foreground w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                    {title}
                    {current && (
                      <span className="ml-3 inline-flex items-center gap-1 text-xs font-mono text-emerald-500 font-normal">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        now
                      </span>
                    )}
                  </h3>
                </div>
                <span className="text-sm text-muted-foreground md:flex-1 ml-10 md:ml-0">
                  {position}
                </span>
                <div className="flex items-center gap-4 ml-10 md:ml-0">
                  <span className="font-mono text-xs text-muted-foreground">
                    {joined}
                  </span>
                  <IconArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </a>
            ))}
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            View all details
            <IconArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <div className="section-divider mx-6 md:mx-10" />

      {/* ── Writings ── */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              WRITINGS
            </h2>
            <span className="font-mono text-sm text-muted-foreground">
              {String(blogs.length).padStart(2, "0")} posts
            </span>
          </div>

          <div className="flex flex-col">
            {sortedBlogs.map(({ title, slug, tags, createdAt }, i) => (
              <Link
                key={slug}
                href={slug}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 py-6 md:py-8 border-t border-border hover:bg-secondary/30 -mx-4 px-4 transition-all duration-300"
              >
                <div className="flex items-start md:items-center gap-4 flex-1">
                  <span className="font-mono text-xs text-muted-foreground w-6 mt-1 md:mt-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 ml-10 md:ml-0">
                  <div className="hidden md:flex gap-2">
                    {tags.slice(0, 2).map(({ name }) => (
                      <span
                        key={name}
                        className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <IconArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            View all posts
            <IconArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <div className="section-divider mx-6 md:mx-10" />

      {/* ── Project ── */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-baseline justify-between mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              PROJECT
            </h2>
          </div>

          <div className="border border-border rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-colors duration-500">
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                SubXtract
              </h3>
              <p className="text-muted-foreground text-lg max-w-lg mb-6">
                A subscription tracker app that helps you stay on top of
                recurring payments. Built with React Native, Expo, and Zustand.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["React Native", "Expo", "Zustand", "Reanimated", "MMKV"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted-foreground bg-secondary border border-border px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://apps.apple.com/us/app/subxtract/id6743356978"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  <IconBrandAppleFilled className="h-4 w-4" />
                  App Store
                </a>
                <Link
                  href="/blogs/subxtract"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-xl hover:bg-secondary transition-colors text-sm"
                >
                  Read the story
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6 md:mx-10" />

      {/* ── Footer ── */}
      <footer className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <p className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-wider">
                Get in touch
              </p>
              <a
                href="mailto:moh.hit1012@gmail.com"
                className="font-display text-2xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors"
              >
                moh.hit1012@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
                  title={name}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Mohit Kumar
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Built with Next.js
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

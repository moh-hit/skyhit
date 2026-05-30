import LetsTalk from "@/components/lets-talk";
import NowPlaying from "@/components/now-playing";
import GitHubStats from "@/components/github-stats";
import { work, getYearsOfExperience } from "@/lib/work";
import { blogs } from "@/lib/blogs";
import { projects, Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandAppstore,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconFileText,
  IconMail,
} from "@tabler/icons-react";

const socials = [
  { name: "GitHub", href: "https://github.com/moh-hit", icon: IconBrandGithub },
  { name: "Twitter", href: "https://x.com/mohitxnova", icon: IconBrandX },
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
  { name: "Discord", href: "https://discord.gg/Px9yUQCu", icon: IconBrandDiscord },
  { name: "Email", href: "mailto:moh.hit1012@gmail.com", icon: IconMail },
];

const heroLinks = [
  { label: "github", href: "https://github.com/moh-hit", icon: IconBrandGithub },
  { label: "x", href: "https://x.com/mohitxnova", icon: IconBrandX },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/moh-it10/",
    icon: IconBrandLinkedin,
  },
  { label: "resume", href: "/resume.pdf", icon: IconFileText },
];

function SectionHeader({
  title,
  count,
  href,
}: {
  title: string;
  count: number;
  href: string;
}) {
  return (
    <div className="flex items-baseline justify-between mb-7">
      <h2 className="font-display text-xl md:text-2xl font-semibold lowercase tracking-tight">
        {title}
        <sup className="ml-0.5 font-mono text-xs font-normal text-primary">
          ({String(count).padStart(2, "0")})
        </sup>
      </h2>
      <Link
        href={href}
        className="group font-mono text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
      >
        all
        <IconArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

function ProjectIcon({ project }: { project: Project }) {
  if (project.iconComponent) {
    return (
      <div
        className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center border"
        style={{
          backgroundColor: `${project.color}14`,
          borderColor: `${project.color}33`,
        }}
      >
        <project.iconComponent
          size={20}
          stroke={1.5}
          style={{ color: project.color }}
        />
      </div>
    );
  }
  return (
    <Image
      src={project.icon!}
      alt={`${project.name} icon`}
      width={40}
      height={40}
      className="rounded-lg shrink-0"
    />
  );
}

function linkIcon(href: string) {
  if (href.includes("github.com")) return IconBrandGithub;
  if (href.includes("apps.apple.com")) return IconBrandAppstore;
  return IconArrowUpRight;
}

export default function Home() {
  const sortedBlogs = [...blogs]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 5);
  const updated = new Date()
    .toLocaleDateString("en-US", { month: "long", year: "numeric" })
    .toLowerCase();

  return (
    <main className="relative">
      <div className="max-w-3xl mx-auto frame-x min-h-screen">
        {/* ── Hero ── */}
        <section className="px-6 md:px-10 pt-28 md:pt-32 pb-14">
          <p className="font-mono text-[11px] text-muted-foreground/60 mb-8 animate-fade-in">
            // {updated} · always shipping, occasionally sleeping
          </p>

          <div className="flex items-center gap-4 animate-fade-in-up">
            <div className="relative w-16 h-16 rounded-xl border border-border overflow-hidden shrink-0">
              <Image
                src="/authors/mohit.jpeg"
                alt="Mohit Kumar"
                fill
                sizes="64px"
                className="object-cover scale-125"
              />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight flex items-center">
                Mohit Kumar
                <span className="caret" />
              </h1>
              <p className="font-mono text-sm text-muted-foreground mt-0.5">
                [ <span className="text-primary">skyhit</span> ]
              </p>
            </div>
          </div>

          {/* Link buttons */}
          <div className="flex flex-wrap gap-2 mt-7 animate-fade-in-up delay-1">
            {heroLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-xs lowercase text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground rounded-md px-3 py-2 transition-all duration-300"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
          </div>

          {/* Intro */}
          <div className="mt-8 max-w-xl animate-fade-in-up delay-2">
            <p className="text-foreground/80 leading-relaxed">
              I build things people keep on their home screen — a calculator
              with opinions, a subscription tracker, and a couple of tools I
              just wished existed. {getYearsOfExperience()}+ years turning
              half-baked ideas into React, React Native &amp; Next.js that
              actually ship.
            </p>
            <p className="font-mono text-sm text-muted-foreground mt-4">
              currently making on-call suck less at{" "}
              <a
                href="https://www.xurrent.com/incident-management-response"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline underline-offset-4"
              >
                Xurrent IMR
              </a>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 animate-fade-in-up delay-3">
            <LetsTalk />
          </div>

          {/* Live status strip */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-fade-in-up delay-4">
            <GitHubStats />
            <NowPlaying />
          </div>
        </section>

        <div className="hatch hatch-divider" />

        {/* ── Projects ── */}
        <section className="px-6 md:px-10 py-12 md:py-14">
          <SectionHeader title="projects" count={projects.length} href="/projects" />

          <div className="flex flex-col">
            {projects.map((project) => {
              const externals = project.links.filter((l) => l.external);
              return (
                <div
                  key={project.slug}
                  className="group flex items-start gap-4 py-5 dashed-t first:border-t-0 first:pt-0"
                >
                  <ProjectIcon project={project} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 mb-1">
                      <h3 className="font-display text-base font-semibold">
                        {project.name}
                      </h3>
                      <span
                        className="inline-flex items-center gap-1 font-mono text-[10px] lowercase px-1.5 py-0.5 rounded border"
                        style={{
                          color: project.color,
                          borderColor: `${project.color}40`,
                        }}
                      >
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1 mb-2.5">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] lowercase text-muted-foreground border border-border rounded px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {externals.map((link) => {
                      const Icon = linkIcon(link.href);
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          title={link.label}
                          className="p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="hatch hatch-divider" />

        {/* ── Experience ── */}
        <section className="px-6 md:px-10 py-12 md:py-14">
          <SectionHeader title="experience" count={work.length} href="/work" />

          <div className="flex flex-col">
            {work.map(({ title, position, url, joined, current }, i) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 py-4 dashed-t first:border-t-0 first:pt-0 hover:bg-secondary/30 -mx-3 px-3 transition-colors duration-300"
              >
                <span className="font-mono text-xs text-muted-foreground/60 w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                    {title}
                    {current && (
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] text-primary font-normal lowercase">
                        <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                        now
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">
                    {position}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground/70 shrink-0">
                  {joined}
                </span>
                <IconArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </section>

        <div className="hatch hatch-divider" />

        {/* ── Blogs ── */}
        <section className="px-6 md:px-10 py-12 md:py-14">
          <SectionHeader title="blogs" count={blogs.length} href="/blogs" />

          <div className="flex flex-col">
            {sortedBlogs.map(({ title, slug, tags, createdAt }, i) => (
              <Link
                key={slug}
                href={slug}
                className="group block py-4 dashed-t first:border-t-0 first:pt-0 hover:bg-secondary/30 -mx-3 px-3 transition-colors duration-300"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground/60 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="flex-1 min-w-0 truncate font-display text-base md:text-lg font-semibold group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                </div>
                <div className="flex items-center gap-2.5 mt-1.5 pl-9 font-mono text-[11px] text-muted-foreground/60 lowercase">
                  <span className="text-muted-foreground/80">
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="truncate">
                    {tags.slice(0, 3).map(({ name }) => name).join("  ·  ")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="hatch hatch-divider" />

        {/* ── Footer ── */}
        <footer className="px-6 md:px-10 py-12 md:py-14">
          <p className="font-mono text-xs text-muted-foreground lowercase mb-4">
            get in touch
          </p>
          <a
            href="mailto:moh.hit1012@gmail.com"
            className="font-display text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors break-all"
          >
            moh.hit1012@gmail.com
          </a>

          <div className="flex items-center gap-2 mt-6">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={name}
                className="p-2.5 rounded-md border border-border hover:border-primary/50 hover:text-primary text-muted-foreground transition-all duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-10 pt-6 dashed-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-xs text-muted-foreground/70">
            <span>last updated · {updated}</span>
            <span>© {new Date().getFullYear()} mohit kumar</span>
          </div>
        </footer>
      </div>
    </main>
  );
}

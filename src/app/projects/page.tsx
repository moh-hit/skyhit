import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { projects, Project, ProjectLink } from "@/lib/projects"
import { IconArrowUpRight, IconArrowRight } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: "Projects — Mohit Kumar",
  description:
    "Apps and projects built by Mohit Kumar — from scientific calculators to subscription trackers and developer tools.",
}

function ProjectIcon({ project }: { project: Project }) {
  if (project.iconComponent) {
    return (
      <div
        className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center border"
        style={{
          backgroundColor: `${project.color}14`,
          borderColor: `${project.color}33`,
        }}
      >
        <project.iconComponent
          size={26}
          stroke={1.5}
          style={{ color: project.color }}
        />
      </div>
    )
  }
  return (
    <Image
      src={project.icon!}
      alt={`${project.name} icon`}
      width={56}
      height={56}
      className="rounded-2xl shrink-0 w-12 h-12 md:w-14 md:h-14"
    />
  )
}

function ProjectLinkRow({ link }: { link: ProjectLink }) {
  const className =
    "group/link inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {link.label}
        <IconArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
      <IconArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
    </Link>
  )
}

export default function ProjectsPage() {
  return (
    <main>
      <div className="max-w-3xl mx-auto frame-x min-h-screen px-6 md:px-10 pt-28 md:pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-14">
          <Link href="/" className="hover:text-primary transition-colors">
            ~
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground">projects</span>
        </div>

        {/* Header */}
        <header className="mb-16 md:mb-24 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold lowercase tracking-tight leading-none">
            projects
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-6 max-w-xl leading-relaxed">
            What I&apos;ve built — shipped apps, developer tools, and the odd
            experiment.
          </p>
        </header>

        {/* Entries */}
        <div>
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="py-10 md:py-14 dashed-t first:border-t-0 first:pt-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="flex items-start gap-5">
                <ProjectIcon project={project} />

                <div className="flex-1 min-w-0">
                  {/* Name + status */}
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                      {project.name}
                    </h2>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground lowercase shrink-0">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      {project.status}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="font-mono text-sm text-primary lowercase mb-5">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="font-sans text-sm text-foreground/60 leading-relaxed space-y-1.5 mb-5 max-w-2xl">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="text-primary/60 shrink-0">—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <p className="font-mono text-xs text-muted-foreground/60 mb-5">
                    {project.stack.join("  ·  ")}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.links.map((link) => (
                      <ProjectLinkRow key={link.href} link={link} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
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
  )
}

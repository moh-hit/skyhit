import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { projects, ProjectLink } from "@/lib/projects"
import { IconArrowUpRight, IconArrowRight } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: "Projects — Mohit Kumar",
  description:
    "Apps and projects built by Mohit Kumar — from scientific calculators to subscription trackers.",
}

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  const isExternal = link.external
  const className =
    "inline-flex items-center justify-center gap-2 border border-border text-foreground font-medium px-5 py-2.5 rounded-xl hover:bg-secondary hover:border-primary/30 transition-all duration-300 text-sm"

  if (isExternal) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {link.label}
        <IconArrowUpRight className="h-3.5 w-3.5" />
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
      <IconArrowRight className="h-3.5 w-3.5" />
    </Link>
  )
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 md:pt-36 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 animate-fadeInUp">
          <p className="font-mono text-sm text-primary uppercase tracking-wider mb-3">
            What I&apos;ve built
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>
        </div>

        {/* Project cards */}
        <div className="space-y-10 md:space-y-14">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group border border-border rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-500 animate-fadeInUp"
              style={{
                animationDelay: `${(index + 1) * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              {/* Top row: icon + name + status */}
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-lg"
                  style={{
                    boxShadow: `0 8px 30px ${project.color}20`,
                  }}
                >
                  <Image
                    src={project.icon}
                    alt={`${project.name} app icon`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                      {project.name}
                    </h2>
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}40`,
                        backgroundColor: `${project.color}10`,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-8 max-w-3xl">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground/75"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted-foreground bg-secondary border border-border px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <ProjectLinkButton key={link.href} link={link} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

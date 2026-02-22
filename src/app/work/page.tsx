import { work } from "@/lib/work"
import { IconArrowUpRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

function WorkPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
            WORK
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            {`Over 4+ years I've had the privilege of building products across
            fintech, gaming, SaaS, and real estate — always pushing the
            boundaries of what's possible on the web and mobile.`}
          </p>
        </div>

        {/* Work items */}
        <div className="flex flex-col">
          {work.map(
            ({
              title,
              position,
              description,
              image,
              url,
              joined,
              stack,
              current,
            }) => (
              <div
                key={title}
                className="group border-t border-border py-10 md:py-16"
              >
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                  {/* Left — company info */}
                  <div className="flex-shrink-0 md:w-72">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 flex items-center justify-center bg-secondary rounded-xl overflow-hidden border border-border">
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-bold flex items-center gap-2">
                          {title}
                          {current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                              <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                              CURRENT
                            </span>
                          )}
                        </h2>
                        <span className="font-mono text-xs text-muted-foreground">
                          {joined}
                        </span>
                      </div>
                    </div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Visit website
                      <IconArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>

                  {/* Right — details */}
                  <div className="flex-1">
                    <p className="text-sm text-primary font-mono uppercase tracking-wider mb-3">
                      {position}
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stack.map(({ name }) => (
                        <span
                          key={name}
                          className="font-mono text-xs text-muted-foreground bg-secondary border border-border px-3 py-1.5 rounded-lg"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <Link
            href="/"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Back home
          </Link>
        </div>
      </div>
    </main>
  )
}

export default WorkPage

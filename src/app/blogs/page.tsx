import { blogs } from "@/lib/blogs"
import { IconArrowRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

function BlogsPage() {
  const sortedBlogs = [...blogs].sort((a, b) => b.createdAt - a.createdAt)

  return (
    <main>
      <div className="max-w-3xl mx-auto frame-x min-h-screen px-6 md:px-10 pt-28 md:pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-14">
          <Link href="/" className="hover:text-primary transition-colors">
            ~
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-foreground">blogs</span>
        </div>

        {/* Header */}
        <header className="mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold lowercase tracking-tight leading-none">
            blogs
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Notes on React, React Native, and the craft of building software.
          </p>
        </header>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {sortedBlogs.map(({ title, description, image, slug, tags, createdAt, readTime }, i) => (
            <Link
              key={slug}
              href={slug}
              className="group flex flex-col rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.04 * (i + 1)}s` }}
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority={i === 0}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {i === 0 && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 font-mono text-[10px] lowercase text-primary bg-background/80 backdrop-blur border border-primary/30 px-2 py-1 rounded">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    latest
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground mb-2">
                  <span>
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-muted-foreground/40">·</span>
                  <span>{readTime} min</span>
                </div>

                <h2 className="font-display text-base md:text-lg font-bold tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {title}
                </h2>

                <p className="font-sans text-sm text-foreground/55 leading-relaxed line-clamp-2 mt-2">
                  {description}
                </p>

                <p className="font-mono text-[11px] text-muted-foreground/50 lowercase mt-4 pt-3 dashed-t">
                  {tags.slice(0, 3).map(({ name }) => name).join("  ·  ")}
                </p>
              </div>
            </Link>
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
            href="/projects"
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            see my projects
            <IconArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default BlogsPage

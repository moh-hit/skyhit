import { blogs } from "@/lib/blogs"
import { IconArrowRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

function BlogsPage() {
  const sortedBlogs = [...blogs].sort((a, b) => b.createdAt - a.createdAt)
  const featured = sortedBlogs[0]
  const rest = sortedBlogs.slice(1)

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
            BLOG
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            Thoughts on React, React Native, and the craft of building
            software.
          </p>
        </div>

        {/* Featured post */}
        <Link href={featured.slug} className="group block mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500">
            <div className="relative w-full md:w-80 h-52 md:h-auto rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-primary uppercase tracking-wider">
                  Latest
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {new Date(featured.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground line-clamp-3 mb-6">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map(({ name }) => (
                  <span
                    key={name}
                    className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-lg"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rest.map(
            ({ title, description, image, slug, tags, createdAt }) => (
              <Link
                key={slug}
                href={slug}
                className="group flex flex-col border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 font-mono text-xs text-foreground/80">
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                    {description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {tags.slice(0, 2).map(({ name }) => (
                        <span
                          key={name}
                          className="font-mono text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                    <IconArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
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

export default BlogsPage

import { blogs } from "@/lib/blogs"
import { IconArrowLeft, IconArrowRight, IconClock, IconCalendar } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

interface BlogDetailLayoutProps {
  slug: string
  children: React.ReactNode
}

export default function BlogDetailLayout({ slug, children }: BlogDetailLayoutProps) {
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) return <div>{children}</div>

  const sortedBlogs = [...blogs].sort((a, b) => b.createdAt - a.createdAt)
  const currentIndex = sortedBlogs.findIndex((b) => b.slug === slug)
  const relatedPosts = sortedBlogs
    .filter((b) => b.slug !== slug)
    .slice(0, 3)

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const prevPost = currentIndex < sortedBlogs.length - 1 ? sortedBlogs[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? sortedBlogs[currentIndex - 1] : null

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Back navigation */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          <IconArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>
      </div>

      {/* Hero cover image */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mb-10">
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-border/50">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      </div>

      {/* Title & meta section */}
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5 animate-fade-in-up">
          {blog.tags.map(({ name, color }) => (
            <span
              key={name}
              className={`font-mono text-xs uppercase tracking-wider ${color} bg-secondary px-3 py-1.5 rounded-lg`}
            >
              {name}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-8 animate-fade-in-up delay-1">
          {blog.title}
        </h1>

        {/* Author & meta bar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-8 mb-10 border-b border-border animate-fade-in-up delay-2">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-border">
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm text-foreground">
                {blog.author.name}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Senior Software Engineer
              </span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-border" />

          <div className="flex items-center gap-5 text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <IconCalendar className="h-4 w-4" />
              <span className="font-mono text-xs">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <IconClock className="h-4 w-4" />
              <span className="font-mono text-xs">{blog.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <article className="animate-fade-in-up delay-3">
          {children}
        </article>
      </div>

      {/* Prev / Next navigation */}
      {(prevPost || nextPost) && (
        <div className="max-w-3xl mx-auto px-6 md:px-10 mt-16">
          <div className="border-t border-border pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={prevPost.slug}
                  className="group flex flex-col gap-2 p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                    <IconArrowLeft className="h-3 w-3" />
                    Previous
                  </span>
                  <span className="font-display font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={nextPost.slug}
                  className="group flex flex-col gap-2 p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 sm:text-right"
                >
                  <span className="font-mono text-xs text-muted-foreground flex items-center gap-1 sm:justify-end">
                    Next
                    <IconArrowRight className="h-3 w-3" />
                  </span>
                  <span className="font-display font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      )}

      {/* More articles */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-20">
        <div className="border-t border-border pt-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8">
            More articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="group flex flex-col border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500"
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] text-foreground/70">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.slice(0, 2).map(({ name }) => (
                      <span
                        key={name}
                        className="font-mono text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer back link */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-border/50">
        <Link
          href="/blogs"
          className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; All posts
        </Link>
      </div>
    </main>
  )
}

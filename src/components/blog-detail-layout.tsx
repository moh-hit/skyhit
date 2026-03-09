import { blogs, getBlogSeries, getRelatedBlogs } from "@/lib/blogs"
import { IconArrowLeft, IconArrowRight, IconClock, IconCalendar, IconMail } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import LetsTalk from "@/components/lets-talk"

interface BlogDetailLayoutProps {
  slug: string
  children: React.ReactNode
}

function formatTopicList(topics: string[]) {
  if (topics.length === 0) {
    return "recent writing"
  }

  if (topics.length === 1) {
    return topics[0]
  }

  return `${topics.slice(0, -1).join(", ")} & ${topics[topics.length - 1]}`
}

export default function BlogDetailLayout({ slug, children }: BlogDetailLayoutProps) {
  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) return <div>{children}</div>

  const series = getBlogSeries(slug)
  const sortedBlogs = [...blogs].sort((a, b) => b.createdAt - a.createdAt)
  const currentIndex = sortedBlogs.findIndex((b) => b.slug === slug)
  const relatedPosts = getRelatedBlogs(slug, 3)
  const previousSeriesPost =
    series && series.currentIndex > 0 ? series.blogs[series.currentIndex - 1] : null
  const nextSeriesPost =
    series && series.currentIndex < series.blogs.length - 1
      ? series.blogs[series.currentIndex + 1]
      : null
  const relatedTopics = Array.from(
    new Map(
      relatedPosts
        .flatMap(({ sharedTags }) => sharedTags)
        .map((tag) => [tag.slug.toLowerCase(), tag.name])
    ).values()
  ).slice(0, 2)
  const moreArticlesTitle = relatedTopics.length
    ? `More on ${formatTopicList(relatedTopics)}`
    : "More articles to explore"
  const moreArticlesDescription = relatedTopics.length
    ? `Picked for overlapping topics with this article, not just what was published last.`
    : "A few other posts worth reading next."

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const prevPost =
    previousSeriesPost ??
    (currentIndex < sortedBlogs.length - 1 ? sortedBlogs[currentIndex + 1] : null)
  const nextPost =
    nextSeriesPost ?? (currentIndex > 0 ? sortedBlogs[currentIndex - 1] : null)
  const prevPostLabel = previousSeriesPost ? "Previous in series" : "Previous"
  const nextPostLabel = nextSeriesPost ? "Next in series" : "Next"

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

        {series && (
          <div className="mb-6 animate-fade-in-up">
            <Link
              href="#series-reading-path"
              className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3 hover:border-primary/30 transition-all duration-300"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary text-primary-foreground font-mono text-xs font-bold shrink-0">
                {blog.series?.part}
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-none mb-1">
                  Part {blog.series?.part} of {series.blogs.length}
                </span>
                <span className="block font-display text-sm font-semibold truncate">
                  {series.title}
                </span>
              </span>
              <IconArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          </div>
        )}

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

      {/* Series reading path */}
      {series && (
        <div id="series-reading-path" className="max-w-3xl mx-auto px-6 md:px-10 mt-16 scroll-mt-24">
          <div className="border-t border-border pt-12">
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground mb-2">
                  Series
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                  {series.title}
                </h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground hidden sm:block">
                {series.blogs.length} parts
              </span>
            </div>
            <div className="flex flex-col">
              {[...series.blogs].reverse().map((seriesPost, visualIndex) => {
                const isCurrent = seriesPost.slug === blog.slug
                const isLast = visualIndex === series.blogs.length - 1

                return (
                  <Link
                    key={seriesPost.slug}
                    href={seriesPost.slug}
                    className="group relative flex gap-5"
                  >
                    {/* Timeline spine */}
                    <div className="flex flex-col items-center pt-1">
                      <div
                        className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 font-mono text-xs font-bold transition-colors duration-300 shrink-0 ${
                          isCurrent
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-background text-muted-foreground group-hover:border-primary/50"
                        }`}
                      >
                        {seriesPost.series?.part}
                      </div>
                      {!isLast && (
                        <div className="w-px flex-1 bg-border" />
                      )}
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 mb-4 rounded-xl border p-4 transition-all duration-300 ${
                        isCurrent
                          ? "border-primary/30 bg-primary/[0.04]"
                          : "border-transparent hover:border-border hover:bg-secondary/30"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3
                          className={`font-display text-[15px] font-semibold leading-snug transition-colors ${
                            isCurrent ? "text-primary" : "group-hover:text-primary"
                          }`}
                        >
                          {seriesPost.title}
                        </h3>
                        {isCurrent && (
                          <span className="shrink-0 rounded-full bg-primary/10 text-primary px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] mt-0.5">
                            Reading
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {seriesPost.description}
                      </p>
                      <span className="mt-2.5 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {seriesPost.readTime} min read
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mt-16">
        <div className="border border-border rounded-2xl p-8 md:p-10 bg-card/30 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Enjoyed this article?
          </p>
          <h3 className="font-display text-xl md:text-2xl font-bold mb-3">
            {`Let's build something together`}
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
            Have a project in mind or just want to chat about React and mobile
            development? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <LetsTalk />
            <a
              href="mailto:moh.hit1012@gmail.com"
              className="inline-flex items-center gap-2 border border-border text-foreground font-display font-medium px-6 py-3 rounded-full hover:bg-secondary transition-colors text-sm"
            >
              <IconMail className="h-4 w-4" />
              Email me
            </a>
          </div>
        </div>
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
                    {prevPostLabel}
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
                    {nextPostLabel}
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
      {relatedPosts.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 md:px-10 mt-20">
          <div className="border-t border-border pt-12">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground mb-3">
              Keep reading
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3">
              {moreArticlesTitle}
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mb-8">
              {moreArticlesDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(({ blog: post, sharedTags }) => (
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
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {sharedTags.length > 0
                        ? `Shared topics: ${formatTopicList(sharedTags.slice(0, 2).map((tag) => tag.name))}`
                        : "Fresh perspective"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

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

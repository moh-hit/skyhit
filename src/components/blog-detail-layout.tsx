import { blogs, getBlogSeries, getRelatedBlogs } from "@/lib/blogs"
import {
  IconArrowLeft,
  IconArrowRight,
  IconClock,
  IconCalendar,
  IconMail,
} from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import LetsTalk from "@/components/lets-talk"

interface BlogDetailLayoutProps {
  slug: string
  children: React.ReactNode
}

function formatTopicList(topics: string[]) {
  if (topics.length === 0) return "recent posts"
  if (topics.length === 1) return topics[0]
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
        .map((tag) => [tag.slug.toLowerCase(), tag.name]),
    ).values(),
  ).slice(0, 2)
  const moreArticlesTitle = relatedTopics.length
    ? `more on ${formatTopicList(relatedTopics)}`
    : "more to read"

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
  const prevPostLabel = previousSeriesPost ? "previous in series" : "previous"
  const nextPostLabel = nextSeriesPost ? "next in series" : "next"

  const seriesOrdered = series
    ? [...series.blogs].sort(
        (a, b) => (a.series?.part ?? 0) - (b.series?.part ?? 0),
      )
    : []

  return (
    <main>
      <article className="max-w-3xl mx-auto frame-x min-h-screen px-6 md:px-10 pt-28 md:pt-32 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-10">
          <Link href="/" className="hover:text-primary transition-colors">
            ~
          </Link>
          <span className="text-muted-foreground/40">/</span>
          <Link href="/blogs" className="hover:text-primary transition-colors">
            blogs
          </Link>
        </div>

        {/* Series indicator */}
        {series && (
          <Link
            href="#series-reading-path"
            className="group inline-flex items-center gap-2 font-mono text-xs text-primary lowercase mb-5 hover:underline underline-offset-4"
          >
            part {blog.series?.part} / {series.blogs.length} · {series.title}
            <IconArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        )}

        {/* Title — deliberately subtle */}
        <h1 className="font-display text-2xl md:text-3xl font-medium tracking-tight leading-snug text-foreground mb-6 animate-fade-in-up">
          {blog.title}
        </h1>

        {/* Meta line */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground mb-6 animate-fade-in-up delay-1">
          <span className="flex items-center gap-2">
            <span className="relative w-6 h-6 rounded-full overflow-hidden border border-border">
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                fill
                className="object-cover"
              />
            </span>
            <span className="text-foreground">{blog.author.name}</span>
          </span>
          <span className="text-muted-foreground/40">·</span>
          <span className="flex items-center gap-1.5">
            <IconCalendar className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
          <span className="text-muted-foreground/40">·</span>
          <span className="flex items-center gap-1.5">
            <IconClock className="h-3.5 w-3.5" />
            {blog.readTime} min read
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8 animate-fade-in-up delay-2">
          {blog.tags.map(({ name }) => (
            <span
              key={name}
              className="font-mono text-[11px] lowercase text-muted-foreground border border-border rounded px-2 py-0.5"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Cover image */}
        <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-border mb-12 animate-fade-in-up delay-2">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article body */}
        <div className="animate-fade-in-up delay-3">{children}</div>

        {/* Series reading path */}
        {series && (
          <section id="series-reading-path" className="mt-20 pt-12 dashed-t scroll-mt-24">
            <p className="font-mono text-xs text-primary lowercase mb-2">
              // series · {series.blogs.length} parts
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8">
              {series.title}
            </h2>
            <div>
              {seriesOrdered.map((seriesPost) => {
                const isCurrent = seriesPost.slug === blog.slug
                return (
                  <Link
                    key={seriesPost.slug}
                    href={seriesPost.slug}
                    className="group flex gap-4 py-5 dashed-t first:border-t-0 first:pt-0"
                  >
                    <span
                      className={`font-mono text-sm shrink-0 w-6 ${
                        isCurrent ? "text-primary" : "text-muted-foreground/50"
                      }`}
                    >
                      {String(seriesPost.series?.part ?? 0).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3
                          className={`font-display text-base md:text-lg font-semibold leading-snug transition-colors ${
                            isCurrent
                              ? "text-primary"
                              : "group-hover:text-primary"
                          }`}
                        >
                          {seriesPost.title}
                        </h3>
                        {isCurrent && (
                          <span className="shrink-0 font-mono text-[10px] text-primary lowercase">
                            reading
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-1 mt-1">
                        {seriesPost.description}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 pt-12 dashed-t">
          <p className="font-mono text-xs text-primary lowercase mb-3">
            // enjoyed this?
          </p>
          <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight mb-3">
            Let&apos;s build something together
          </h3>
          <p className="font-sans text-muted-foreground max-w-md mb-6 leading-relaxed">
            Have a project in mind or just want to chat about React and mobile
            development? I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <LetsTalk />
            <a
              href="mailto:moh.hit1012@gmail.com"
              className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-sm lowercase px-5 py-2.5 rounded-md hover:border-primary/40 hover:text-primary transition-colors"
            >
              <IconMail className="h-4 w-4" />
              email me
            </a>
          </div>
        </section>

        {/* Prev / Next */}
        {(prevPost || nextPost) && (
          <section className="mt-16 pt-12 dashed-t grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevPost ? (
              <Link href={prevPost.slug} className="group">
                <span className="font-mono text-xs text-muted-foreground lowercase flex items-center gap-1 mb-2">
                  <IconArrowLeft className="h-3 w-3" />
                  {prevPostLabel}
                </span>
                <span className="font-display font-semibold group-hover:text-primary transition-colors line-clamp-2 block">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link href={nextPost.slug} className="group sm:text-right">
                <span className="font-mono text-xs text-muted-foreground lowercase flex items-center gap-1 sm:justify-end mb-2">
                  {nextPostLabel}
                  <IconArrowRight className="h-3 w-3" />
                </span>
                <span className="font-display font-semibold group-hover:text-primary transition-colors line-clamp-2 block">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </section>
        )}

        {/* More articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-12 dashed-t">
            <p className="font-mono text-xs text-primary lowercase mb-2">
              // keep reading
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight lowercase mb-8">
              {moreArticlesTitle}
            </h2>
            <div>
              {relatedPosts.map(({ blog: post }) => (
                <Link
                  key={post.slug}
                  href={post.slug}
                  className="group flex gap-5 py-5 dashed-t first:border-t-0 first:pt-0"
                >
                  <div className="relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border border-border shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base md:text-lg font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-mono text-[11px] text-muted-foreground/60 lowercase mt-2">
                      {post.tags.slice(0, 3).map(({ name }) => name).join("  ·  ")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer back link */}
        <div className="mt-16 pt-6 dashed-t">
          <Link
            href="/blogs"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors lowercase"
          >
            ← all posts
          </Link>
        </div>
      </article>
    </main>
  )
}

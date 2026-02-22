import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-12 mb-6 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl md:text-2xl font-semibold mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-display text-lg font-semibold mt-6 mb-2">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-display text-base font-semibold mt-4 mb-2">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="font-display text-sm font-semibold mt-4 mb-2 text-muted-foreground">{children}</h6>
    ),
    p: ({ children }) => (
      <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-5">
        {children}
      </p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-primary hover:text-primary/80 underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="text-sm font-mono bg-secondary text-primary/90 px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="text-sm font-mono bg-secondary/80 border border-border rounded-xl p-5 overflow-x-auto mb-6 text-wrap">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary/50 pl-5 my-6 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
    hr: () => (
      <hr className="border-border my-10" />
    ),
    ol: ({ children }) => (
      <ol className="ml-4 mb-5 space-y-1 list-decimal list-outside marker:text-muted-foreground">
        {children}
      </ol>
    ),
    ul: ({ children }) => (
      <ul className="ml-4 mb-5 space-y-1">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="text-base md:text-lg leading-relaxed text-foreground/90 before:content-['•'] before:inline-block before:pr-2 before:text-muted-foreground">
        {children}
      </li>
    ),
    img: ({ src, alt }) => (
      <span className="block my-8 rounded-xl overflow-hidden border border-border/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt || ""} className="w-full" />
      </span>
    ),
    ...components,
  }
}

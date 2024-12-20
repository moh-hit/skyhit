import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl font-extrabold mb-10">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-bold">{children}</h6>,
    p: ({ children }) => <p className="text-lg">{children}</p>,
    a: ({ children, href }) => (
      <a href={href} className="font-medium text-base">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="text-sm font-mono bg-slate-100">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="text-sm font-mono bg-slate-100 p-4 rounded-xl text-wrap">
        {children}
      </pre>
    ),
    ol: ({ children }) => <ol className="ml-2">{children}</ol>,
    ul: ({ children }) => <ul className="ml-2">{children}</ul>,
    li: ({ children }) => (
      <li className="my-4 before:content-['•'] before:inline-block before:pr-2 before:text-slate-500 text-base">
        {children}
      </li>
    ),
    ...components,
  }
}

import type { MDXComponents } from "mdx/types"
import Image, { ImageProps } from "next/image"

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
    code: ({ children }) => (
      <code className="text-sm font-mono bg-slate-100 p-1">{children}</code>
    ),
    ...components,
  }
}

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mastering React Hooks: Advanced Patterns and Techniques",
  description:
    "React Hooks revolutionized the way we write React components, providing a more direct API to React's core features. While basic hooks like useState and useEffect are widely known, there's a world of advanced hook patterns that can dramatically improve your React application's architecture, performance, and maintainability.",
  openGraph: {
    images: "/blogs/advanced-hooks-pattern-and-techniques/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 gap-6 text-xl py-10">
      {children}
    </div>
  )
}

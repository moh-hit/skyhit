import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "Mastering React Hooks: Advanced Patterns and Techniques",
  description:
    "React Hooks revolutionized the way we write React components, providing a more direct API to React's core features. While basic hooks like useState and useEffect are widely known, there's a world of advanced hook patterns that can dramatically improve your React application's architecture, performance, and maintainability.",
  openGraph: {
    images: "/blogs/advanced-hooks-pattern-and-techniques/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/advanced-hooks-pattern-and-techniques">
      {children}
    </BlogDetailLayout>
  )
}

import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "My App Was Crashing in Production and I Had No Idea Why",
  description:
    "How a missing env variable, a splash screen trap, and a side effect in useMemo led to a production crash — and the debugging methodology that uncovered it all, layer by layer.",
  openGraph: {
    images: "/blogs/debugging-production-crash-expo/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/debugging-production-crash-expo">
      {children}
    </BlogDetailLayout>
  )
}

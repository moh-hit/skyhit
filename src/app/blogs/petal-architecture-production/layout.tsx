import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "Petal is Live: Architecture, Features, and Production Patterns",
  description:
    "A deep dive into Petal's architecture: multi-currency support, social subscription sharing, trial management, local-first sync queues, and the design patterns that make it different from typical subscription trackers.",
  openGraph: {
    images: "/blogs/petal-architecture-production/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/petal-architecture-production">
      {children}
    </BlogDetailLayout>
  )
}

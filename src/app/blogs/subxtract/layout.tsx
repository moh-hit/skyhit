import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "SubXtract",
  description: "My new Subscription Tracker app",
  openGraph: {
    images: "/blogs/subxtract/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/subxtract">
      {children}
    </BlogDetailLayout>
  )
}

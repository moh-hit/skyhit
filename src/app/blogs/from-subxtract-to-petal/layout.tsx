import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "From SubXtract to Petal — Rebuilding with AI and a New Mindset",
  description:
    "How Apple's broken payment gateway, my brother's dev account, and a year of AI-assisted development led me to build Petal — a better subscription tracker.",
  openGraph: {
    images: "/blogs/from-subxtract-to-petal/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/from-subxtract-to-petal">
      {children}
    </BlogDetailLayout>
  )
}

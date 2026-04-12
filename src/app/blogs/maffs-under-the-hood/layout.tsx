import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "Inside Maffs: Building a Scientific Calculator with AI, Graphs, and 6 Themes",
  description:
    "A technical deep-dive into Maffs — the recursive descent parser, AI-powered Nerd Mode, interactive graph plotting, unit conversion, theme system, and the paywall that ties it all together.",
  openGraph: {
    images: "/blogs/maffs-under-the-hood/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/maffs-under-the-hood">
      {children}
    </BlogDetailLayout>
  )
}

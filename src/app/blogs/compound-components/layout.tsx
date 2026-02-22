import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "Compound Components",
  description:
    "Compound components are a powerful pattern in React that allows you to create flexible and reusable UI components. This pattern can help you build more maintainable and scalable applications by separating concerns and providing a clean API for your components.",
  openGraph: {
    images: "/blogs/compound-components/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/compound-components">
      {children}
    </BlogDetailLayout>
  )
}

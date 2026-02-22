import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title:
    "Exploring the Latest React 19 Stable Release: What's New and Exciting",
  description:
    "React, the popular JavaScript library for building user interfaces, has reached a significant milestone with the release of React 19. Officially released on December 5, 2024, this version brings a slew of exciting updates and improvements that aim to enhance the development experience and the performance of React applications. In this blog post, we'll dive into the key features and changes introduced in React 19.",
  openGraph: {
    images: "/blogs/exploring-the-latest-react-19/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/exploring-the-latest-react-19">
      {children}
    </BlogDetailLayout>
  )
}

import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "Realtime Collaboration with React",
  description:
    "A comprehensive guide on building real-time collaborative applications with React using tools like WebSockets and WebRTC.",
  openGraph: {
    images: "/blogs/realtime-collaboration-with-react/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/realtime-collaboration-with-react">
      {children}
    </BlogDetailLayout>
  )
}

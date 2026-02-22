import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "React Native Reanimated 2",
  description:
    "React Native Reanimated 2 is a powerful library that allows you to create high-performance animations and interactions in your React Native applications. This library is built on top of Reanimated and provides a simple and intuitive API for creating complex animations.",
  openGraph: {
    images: "/blogs/mastering-react-native-reanimated-2/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/mastering-react-native-reanimated-2">
      {children}
    </BlogDetailLayout>
  )
}

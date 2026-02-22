import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "Using Native Code in React Native: A Beginner's Guide",
  description:
    "Learn how to integrate custom native modules into your React Native app to unlock the full power of the platform.",
  openGraph: {
    images: "/blogs/native-code-in-react-native/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/native-code-in-react-native">
      {children}
    </BlogDetailLayout>
  )
}

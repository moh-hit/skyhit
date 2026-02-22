import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "Implementing Custom Theming in a React Native App",
  description:
    "Theming is essential for creating consistent and visually appealing user interfaces in mobile apps. It allows for easy customization and ensures your app can adapt to user preferences, like light or dark modes. In this blog post, I'll walk you through how I implemented custom theming in my React Native app.",
  openGraph: {
    images: "/blogs/theming-in-react-native/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/theming-in-react-native">
      {children}
    </BlogDetailLayout>
  )
}

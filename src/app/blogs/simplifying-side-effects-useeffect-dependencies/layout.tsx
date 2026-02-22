import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "Simplifying Side Effects: Dependencies in React's useEffect",
  description:
    "Dive into the nuances of managing dependencies in React's useEffect hook. This detailed guide uncovers common challenges, solutions, and practical techniques to write cleaner and more efficient side effects in your React applications.",
  openGraph: {
    images: "/blogs/simplifying-side-effects-useeffect-dependencies/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/simplifying-side-effects-useeffect-dependencies">
      {children}
    </BlogDetailLayout>
  )
}

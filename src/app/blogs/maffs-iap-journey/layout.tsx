import { Metadata } from "next"
import BlogDetailLayout from "@/components/blog-detail-layout"

export const metadata: Metadata = {
  title: "6 Rejections, 1 Approval: Shipping In-App Purchases with React Native & RevenueCat",
  description:
    "The full story of getting Maffs through Apple App Review — from RevenueCat cache bugs and missing legal links to Paid Apps Agreement gotchas and duplicate build numbers.",
  openGraph: {
    images: "/blogs/maffs-iap-journey/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <BlogDetailLayout slug="/blogs/maffs-iap-journey">
      {children}
    </BlogDetailLayout>
  )
}

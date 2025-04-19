import { Metadata } from "next"

export const metadata: Metadata = {
  title: "SubXtract",
  description: "My new Subscription Tracker app",
  openGraph: {
    images: "/blogs/subxtract/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 gap-6 text-xl py-10">
      {children}
    </div>
  )
}

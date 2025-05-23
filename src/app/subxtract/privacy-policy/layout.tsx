import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Subxtract",
  description:
    "Subxtract is a privacy-focused subscription tracking app that helps you keep track of your subscriptions, monitor your spending, and cancel unwanted subscriptions.",
  openGraph: {},
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 gap-6 text-xl py-10">
      {children}
    </div>
  )
}

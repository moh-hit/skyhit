import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Simplifying Side Effects: Dependencies in React's useEffect",
  description:
    "Dive into the nuances of managing dependencies in React's useEffect hook. This detailed guide uncovers common challenges, solutions, and practical techniques to write cleaner and more efficient side effects in your React applications.",
  openGraph: {
    images: "/blogs/simplifying-side-effects-useeffect-dependencies/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 gap-6 text-xl py-10">
      {children}
    </div>
  )
}

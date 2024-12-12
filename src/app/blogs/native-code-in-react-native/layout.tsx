import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Using Native Code in React Native: A Beginner’s Guide",
  description:
    "Learn how to integrate custom native modules into your React Native app to unlock the full power of the platform.",
  openGraph: {
    images: "/blogs/native-code-in-react-native/cover.jpg",
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

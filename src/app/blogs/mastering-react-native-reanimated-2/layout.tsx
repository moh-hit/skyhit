import { Metadata } from "next"

export const metadata: Metadata = {
  title: "React Native Reanimated 2",
  description:
    "React Native Reanimated 2 is a powerful library that allows you to create high-performance animations and interactions in your React Native applications. This library is built on top of Reanimated and provides a simple and intuitive API for creating complex animations.",
  openGraph: {
    images: "/blogs/mastering-react-native-reanimated-2/cover.png",
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

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Realtime Collaboration with React",
  description:
    "A comprehensive guide on building real-time collaborative applications with React using tools like WebSockets and WebRTC.",
  openGraph: {
    images: "/blogs/realtime-collaboration-with-react/cover.jpg",
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

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compound Components",
  description:
    "Compound components are a powerful pattern in React that allows you to create flexible and reusable UI components. This pattern can help you build more maintainable and scalable applications by separating concerns and providing a clean API for your components.",
  assets: "/blogs/compound-components/cover.png",
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 gap-6 text-xl py-10">
      {children}
    </div>
  )
}

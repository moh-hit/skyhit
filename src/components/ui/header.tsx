import React from "react"
import Link from "next/link"
import { IconExternalLink } from "@tabler/icons-react"

function Header() {
  return (
    <div className="flex items-center justify-between px-10 py-4">
      <div className="flex items-center">
        {/* <Link href="/" className="cursor-pointer">
          <h1 className="text-7xl">MK</h1>
        </Link> */}
      </div>
      <div className="flex items-center gap-10 font-medium text-lg">
        <Link
          href="/resume"
          className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer flex items-center gap-1"
        >
          Resume
          <IconExternalLink className="h-4 w-4" />
        </Link>
        <Link
          href="/work"
          className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
        >
          Work
        </Link>
        <Link
          href="/blogs"
          className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
        >
          Blogs
        </Link>
      </div>
    </div>
  )
}

export default Header

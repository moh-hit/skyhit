import React from "react"
import { IconExternalLink, IconMenu2 } from "@tabler/icons-react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet"
import Link from "next/link"

function Header() {
  return (
    <div className="flex items-center justify-end px-10 py-4">
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <IconMenu2 className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent>
          <div
            className={`flex items-center gap-10 font-medium text-2xl xl:text-lg w-full flex-col mt-10 justify-end`}
          >
            <SheetClose asChild>
              <Link
                href="/"
                className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/work"
                className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                Work
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/blogs"
                className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                Blogs
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/resume.pdf"
                className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer flex items-center gap-1"
                target="_blank"
              >
                Resume
                <IconExternalLink className="h-4 w-4" />
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/subxtract/privacy-policy"
                className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer text-base md:text-2xl xl:text-lg"
                target="_blank"
              >
                Privacy Policy (Subxtract)
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      <div className="items-center gap-10 font-medium text-2xl xl:text-lg hidden md:flex">
        <Link
          href="/"
          className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
        >
          Home
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
        <Link
          href="/subxtract/privacy-policy"
          className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          target="_blank"
        >
          Privacy Policy (Subxtract)
        </Link>
        <Link
          href="/resume.pdf"
          className="relative after:bg-black after:absolute after:h-0.5 after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer flex items-center gap-1"
          target="_blank"
        >
          Resume
          <IconExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default Header

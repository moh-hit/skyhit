import { IconArrowUpRight, IconMenu2 } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet"

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
        <Image src="/logo.png" alt="MK" width={36} height={36} className="rounded-lg" />
      </Link>

      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <IconMenu2 className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-background border-border">
          <div className="flex flex-col gap-8 mt-16">
            <SheetClose asChild>
              <Link
                href="/"
                className="font-display text-2xl text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/work"
                className="font-display text-2xl text-foreground hover:text-primary transition-colors"
              >
                Work
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/blogs"
                className="font-display text-2xl text-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="font-display text-2xl text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                Resume
                <IconArrowUpRight className="h-5 w-5" />
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8 font-mono text-sm tracking-wide">
        <Link
          href="/"
          className="link-hover text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="link-hover text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
        >
          Work
        </Link>
        <Link
          href="/blogs"
          className="link-hover text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
        >
          Blog
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="link-hover text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase flex items-center gap-1.5"
        >
          Resume
          <IconArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </nav>
  )
}

export default Header

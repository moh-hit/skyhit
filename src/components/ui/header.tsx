import { IconArrowUpRight, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import logoImg from "../../../public/logo.png";

const navItems = [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "projects", href: "/projects" },
  { label: "blogs", href: "/blogs" },
];

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/80 backdrop-blur-xl dashed-b">
      <div className="max-w-3xl mx-auto px-6 md:px-0 flex items-center justify-between">
      <Link
        href="/"
        className="group flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-300"
      >
        <Image
          src={logoImg}
          alt="MK"
          width={28}
          height={28}
          className="rounded-md"
          priority
        />
        <span className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">~/</span>
          mohit
        </span>
      </Link>

      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <button className="p-2 hover:bg-secondary rounded-md transition-colors">
            <IconMenu2 className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-background border-border">
          <div className="flex flex-col gap-6 mt-16 font-mono">
            {navItems.map(({ label, href }) => (
              <SheetClose asChild key={href}>
                <Link
                  href={href}
                  className="text-2xl lowercase text-foreground hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                className="text-2xl lowercase text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                resume
                <IconArrowUpRight className="h-5 w-5" />
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-7 font-mono text-sm">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 lowercase"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-foreground hover:text-primary transition-colors duration-300 lowercase flex items-center gap-1 border border-border hover:border-primary/40 rounded-md px-3 py-1"
        >
          resume
          <IconArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
      </div>
    </nav>
  );
}

export default Header;

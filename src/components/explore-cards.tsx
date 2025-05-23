"use client"

import {
  IconArrowRight,
  IconBlockquote,
  IconBrandApple,
  IconBrandAppleFilled,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandGooglePlay,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBriefcase,
  IconDeviceMobile,
  IconExternalLink,
  IconMail,
} from "@tabler/icons-react"
import React from "react"
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip"
import { TooltipTrigger } from "@radix-ui/react-tooltip"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { blogs } from "@/lib/blogs"

const socials = [
  {
    name: "Github",
    href: "https://github.com/moh-hit",
    icon: IconBrandGithub,
    color: "text-slate-600",
    accent: "bg-blue-50",
  },
  {
    name: "Twitter",
    href: "https://x.com/mohitxnova",
    icon: IconBrandTwitter,
    color: "text-sky-600",
    accent: "bg-blue-50",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_moh.itoo_",
    icon: IconBrandInstagram,
    color: "text-pink-600",
    accent: "bg-blue-50",
  },
  {
    name: "Email",
    href: "mailto: moh.hit1012@gmail.com",
    icon: IconMail,
    color: "text-red-600",
    accent: "bg-blue-50",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/moh-it10/",
    icon: IconBrandLinkedin,
    color: "text-blue-600",
    accent: "bg-blue-50",
  },
  {
    name: "Discord",
    href: "https://discord.gg/Px9yUQCu",
    icon: IconBrandDiscord,
    color: "text-indigo-600",
    accent: "bg-blue-50",
  },
]

function ExploreCards() {
  const router = useRouter()

  const onGoToPage = (page: string) => () => {
    if (page === "app") {
      window.open(
        "https://apps.apple.com/us/app/subxtract/id6743356978",
        "_blank"
      )
      return
    }
    router.push(`/${page}`)
  }

  return (
    <div className="flex flex-1 flex-col md:flex-row md:flex-wrap justify-between w-full h-full gap-10">
      <div className="relative flex flex-1 p-6 w-full h-full md:w-[45%] xl:w-full rounded-3xl bg-background border-2 border-slate-200 flex-col gap-4 justify-between card min-h-72">
        <h2 className="font-display text-5xl xl:text-4xl cardContent">
          Explore my work
        </h2>
        <Link
          href="/work"
          className="opacity-0 cardContent2 absolute top-6 left-6 rounded-2xl bg-background border-2 border-slate-200 flex flex-col gap-1 p-4 max-w-[83%] hover:bg-amber-50 hover:border-amber-200 hover:shadow-md hover:shadow-amber-100"
        >
          <h2 className="font-display text-md xl:text-xl font-medium">
            Currently working with{" "}
            <span className="text-amber-500 font-bold">Zenduty</span>
          </h2>
          <h2>as Senior Software Developer</h2>
        </Link>
        <Button
          className="w-full rounded-xl text-md"
          variant="outline"
          onClick={onGoToPage("work")}
        >
          <IconBriefcase className="h-5 w-5 text-amber-600 mr-2" />
          Go to career
        </Button>
      </div>
      <div className="relative flex flex-1 p-6 w-full h-full md:w-[45%] xl:w-full rounded-3xl bg-background border-2 border-slate-200 flex-col gap-4 justify-between card min-h-72">
        <h2 className="font-display text-5xl xl:text-4xl cardContent">
          Read my blogs
        </h2>
        <Link
          href={blogs[blogs.length - 1].slug}
          className="opacity-0 cardContent2 absolute top-6 left-6 rounded-2xl bg-background border-2 border-slate-200 flex flex-col gap-1 p-4 max-w-[83%] hover:bg-green-50 hover:border-green-200 hover:shadow-md hover:shadow-green-100"
        >
          <h2 className="font-display text-md xl:text-xl font-medium">
            Latest blog
          </h2>
          <h2 className="line-clamp-3">{blogs[blogs.length - 1].title}</h2>
        </Link>
        <Button
          className="w-full rounded-xl text-md"
          variant="outline"
          onClick={onGoToPage("blogs")}
        >
          <IconBlockquote className="h-5 w-5 text-green-600 mr-2" />
          Go to blogs
        </Button>
      </div>
      <div className="flex flex-1 p-6 w-full h-full md:w-[45%] xl:w-full rounded-3xl bg-background border-2 border-slate-200 flex-col gap-4 justify-between min-h-72">
        <h2 className="font-display text-5xl xl:text-4xl">
          Checkout my app{" "}
          <span className="text-indigo-600 text-xl xl:text-2xl">
            (SubXtract)
          </span>
        </h2>
        <div className="flex flex-col gap-4">
          <Button
            className="w-full rounded-xl text-md"
            variant="outline"
            onClick={onGoToPage("app")}
          >
            <IconBrandAppleFilled className="h-5 w-5 text-indigo-600 mr-2" />
            App Store
          </Button>
          <Button
            className="w-full rounded-xl text-md"
            variant="outline"
            onClick={onGoToPage("blogs/subxtract")}
          >
            <IconBlockquote className="h-5 w-5 text-green-600 mr-2" />
            Read More
          </Button>
        </div>
      </div>
      <div className="flex flex-1 p-6 w-full h-full md:w-[45%] xl:w-full min-h-72 rounded-3xl bg-background border-2 border-slate-200 flex-col gap-4 justify-between">
        <h2 className="font-display text-4xl xl:text-4xl">
          Find me on socials
        </h2>
        <div className="flex flex-row flex-wrap w-full items-center gap-7 md:gap-3">
          {socials.map(({ name, href, icon: Icon, color, accent }) => (
            <TooltipProvider key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-full  transition-colors hover:${accent}  duration-500`}
                  >
                    <Icon className={`h-7 w-7 ${color}`} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-${color}-500 font-medium`}
                  >
                    {href}
                  </a>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExploreCards

"use client"

import {
  IconArrowRight,
  IconBlockquote,
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

const socials = [
  {
    name: "Github",
    href: "https://github.com/moh-hit",
    icon: IconBrandGithub,
    color: "text-slate-600",
    accent: "bg-slate-100",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/mohitoo",
    icon: IconBrandTwitter,
    color: "text-sky-600",
    accent: "bg-sky-100",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mohit.oo",
    icon: IconBrandInstagram,
    color: "text-pink-600",
    accent: "bg-pink-100",
  },
  {
    name: "Email",
    href: "mailto:moh.hit1012@gmail.com",
    icon: IconMail,
    color: "text-red-600",
    accent: "bg-red-100",
  },
  {
    name: "Linkedin",
    href: "https://twitter.com/mohitoo",
    icon: IconBrandLinkedin,
    color: "text-blue-600",
    accent: "bg-blue-100",
  },
  {
    name: "Discord",
    href: "https://discord.gg/9w4q3u4",
    icon: IconBrandDiscord,
    color: "text-indigo-600",
    accent: "bg-indigo-100",
  },
]

function ExploreCards() {
  const router = useRouter()

  const onGoToPage = (page: string) => () => {
    router.push(`/${page}`)
  }

  return (
    <div className="flex flex-1 flex-col md:flex-row justify-between w-full h-full gap-10">
      <div className="relative flex flex-1 p-6 w-full h-full rounded-3xl bg-background border-2 border-slate-200 flex-col gap-4 justify-between card min-h-52">
        <h2 className="font-display text-3xl md:text-4xl cardContent">
          Explore my work
        </h2>
        <Link
          href="/work/zenduty"
          className="opacity-0 cardContent2 absolute top-6 left-6 rounded-2xl bg-background border-2 border-slate-200 flex flex-col gap-1 p-4 max-w-[83%] hover:bg-amber-50 hover:border-amber-200 hover:shadow-md hover:shadow-amber-100"
        >
          <h2 className="font-display text-md md:text-xl font-medium">
            Currently working with{" "}
            <span className="text-amber-500 font-bold">Zenduty</span>
          </h2>
          <h2>as Senior Software Developer</h2>
        </Link>
        <Button
          className="w-full rounded-xl"
          variant="outline"
          onClick={onGoToPage("work")}
        >
          <IconBriefcase className="h-3 w-3 md:h-5 md:w-5 text-amber-600 mr-2" />
          Go to career
        </Button>
      </div>
      <div className="relative flex flex-1 p-6 w-full h-full rounded-3xl bg-background border-2 border-slate-200 flex-col gap-4 justify-between card min-h-52">
        <h2 className="font-display text-3xl md:text-4xl cardContent">
          Read my blogs
        </h2>
        <Link
          href="/blogs/how-does-compound-components-work"
          className="opacity-0 cardContent2 absolute top-6 left-6 rounded-2xl bg-background border-2 border-slate-200 flex flex-col gap-1 p-4 max-w-[83%] hover:bg-green-50 hover:border-green-200 hover:shadow-md hover:shadow-green-100"
        >
          <h2 className="font-display text-md md:text-xl font-medium">
            Latest blog
          </h2>
          <h2 className="line-clamp-3">How does compound components work?</h2>
        </Link>
        <Button
          className="w-full rounded-xl"
          variant="outline"
          onClick={onGoToPage("blogs")}
        >
          <IconBlockquote className="h-3 w-3 md:h-5 md:w-5 text-green-600 mr-2" />
          Go to blogs
        </Button>
      </div>
      <div className="flex flex-1 p-6 w-full h-full rounded-3xl bg-background border-2 border-slate-200 flex-col gap-4 justify-between min-h-52">
        <h2 className="font-display text-3xl md:text-4xl">
          Checkout my app{" "}
          <span className="text-indigo-600 text-xl md:text-2xl">
            (Substrack)
          </span>
        </h2>
        <Button
          className="w-full rounded-xl"
          variant="outline"
          onClick={onGoToPage("app")}
        >
          <IconDeviceMobile className="h-3 w-3 md:h-5 md:w-5 text-indigo-600 mr-2" />
          Go to app
        </Button>
      </div>
      <div className="flex flex-1 p-6 w-full h-full min-h-56 rounded-3xl bg-background border-2 border-slate-200 flex-col gap-4 justify-between">
        <h2 className="font-display text-3xl md:text-4xl">
          Find me on socials
        </h2>
        <div className="flex flex-row flex-wrap w-full items-center justify-between gap-3">
          {socials.map(({ name, href, icon: Icon, color, accent }) => (
            <TooltipProvider key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-full hover:${accent} transition-colors duration-500`}
                  >
                    <Icon className={`h-10 w-10 md:h-8 md:w-8 ${color}`} />
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
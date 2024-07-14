import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { work } from "@/lib/work"
import { IconChevronRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

function page() {
  return (
    <main className="flex min-h-screen flex-row items-start p-10 gap-10">
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="w-full flex flex-col gap-6 xl:h-[calc(40vh)] items-center justify-center">
          <h2 className="font-display text-4xl xl:text-6xl font-medium">
            Work
          </h2>
          <p className="font-normal text-lg xl:text-2xl text-center xl:max-w-[75%]">
            In my experience of working for more than 4 years, I have worked on
            various projects ranging from designing and building websites to
            building and maintaining backend services.
          </p>
        </div>
        <div className="flex gap-10 flex-wrap justify-center">
          {work.map(
            ({ title, description, image, url, stack, position, slug }) => (
              <div
                key={url}
                className="flex flex-col gap-4 bg-background border-b-2 border-slate-200 py-6 w-full xl:h-[calc(40vh)] items-start xl:w-[45%] justify-between"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="relative w-16 h-16 flex items-center justify-center border-2 border-slate-100 rounded-2xl overflow-hidden">
                      <Image src={image} alt={title} fill />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-display text-xl xl:text-2xl font-medium">
                        {title}
                      </h2>
                      <span>{position}</span>
                    </div>
                  </div>
                  {/* <p className="font-semibold text-md xl:text-lg mb-10">
                  Joined {joined}
                </p> */}
                  <div className="flex flex-row gap-2 items-center flex-wrap">
                    {stack.map(({ name, color, accent }) => (
                      <Badge
                        key={name}
                        className={`${color} ${accent}`}
                        variant="outline"
                      >
                        <span className="font-medium text-sm">{name}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-md xl:text-lg">{description}</p>
                {/* <Link
                  className="relative text-sm font-semibold flex items-center after:bg-black after:absolute after:h-[1px] after:rounded-lg after:w-0 after:bottom-0 after:left-0 hover:after:w-[80%] after:transition-all after:duration-300"
                  href={slug}
                >
                  Learn more
                  <IconChevronRight className="ml-2 h-4 w-4" />
                </Link> */}
              </div>
            )
          )}
        </div>
      </div>
    </main>
  )
}

export default page

import { Badge } from "@/components/ui/badge"
import { blogs } from "@/lib/blogs"
import Image from "next/image"
import Link from "next/link"
import React from "react"

function page() {
  return (
    <main className="flex min-h-screen flex-row items-start p-10 gap-10">
      <div className="flex flex-1 flex-col items-start gap-10">
        <div className="w-full flex flex-col gap-6 md:h-[calc(40vh)] items-center justify-center">
          <h2 className="font-display text-4xl md:text-6xl font-medium">
            Blogs
          </h2>
          <p className="font-normal text-lg md:text-2xl">
            Explore the world of React, React Native and everything in between.
          </p>
        </div>
        <div className="flex gap-10 flex-wrap">
          {blogs.map(({ title, author, description, image, slug, tags }) => {
            const { name, image: authorImage } = author
            return (
              <Link
                href={slug}
                key={slug}
                className="flex flex-col gap-6 md:w-[30%]"
              >
                <div className="relative w-full h-64 flex rounded-2xl overflow-hidden">
                  <Image src={image} alt="React" fill objectFit="cover" />
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-lg md:text-xl font-bold">{title}</h2>
                  <p className="line-clamp-3 text-sm">{description}</p>
                  <div className="flex flex-row gap-2 text-sm flex-wrap">
                    {tags.map(({ name: tag, color }) => (
                      <Badge
                        variant="outline"
                        key={tag}
                        className={`font-medium ${color}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={authorImage}
                        alt={name}
                        fill
                        objectFit="cover"
                      />
                    </div>
                    <span className="font-medium text-sm">By {name}</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default page

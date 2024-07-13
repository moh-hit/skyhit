import { blogs } from "@/lib/blogs"
import Image from "next/image"
import React from "react"

function page() {
  return (
    <main className="flex min-h-screen flex-row items-start p-10 gap-10">
      <div className="flex flex-1 flex-col items-start gap-10">
        <h2 className="font-display text-4xl md:text-6xl font-medium">Blogs</h2>
        <p className="font-normal text-lg md:text-2xl">
          Explore the world of React, React Native and the tech world.
        </p>
        <div className="flex gap-10 justify-between flex-wrap">
          {blogs
            .slice(0, 1)
            .map(({ title, author, description, image, slug }) => (
              <div key={slug} className="flex flex-col gap-4 md:w-[60%]">
                <div className="relative w-full h-80 flex items-center justify-center rounded-2xl overflow-hidden">
                  <Image src={image} alt="React" fill />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                  <p className="line-clamp-4">{description}</p>
                  <span className="font-medium ">By {author}</span>
                </div>
              </div>
            ))}
          {blogs.slice(1).map(({ title, author, description, image, slug }) => (
            <div key={slug} className="flex flex-col gap-4 md:w-[30%]">
              <div className="relative w-full h-80 flex rounded-2xl overflow-hidden">
                <Image src={image} alt="React" fill objectFit="contain" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
                <p className="line-clamp-4">{description}</p>
                <span className="font-medium ">By {author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default page

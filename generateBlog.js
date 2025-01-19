const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")

// List of possible tag colors
const tagColors = [
  "text-violet-500",
  "text-blue-500",
  "text-green-500",
  "text-red-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-orange-500",
  "text-indigo-500",
]

// Path to the blogs.ts file
const blogsFilePath = path.join(__dirname, "src/lib/blogs.ts")

// Function to append the new blog object
async function createBlog() {
  // Get blog details from the user
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the blog title:",
    },
    {
      type: "input",
      name: "description",
      message: "Enter the blog description:",
    },
    {
      type: "input",
      name: "tags",
      message: "Enter the tags (comma separated):",
    },
    {
      type: "input",
      name: "slug",
      message: "Enter the blog slug (manual input):",
    },
  ])

  // Create new blog object
  const tags = answers.tags.split(",").map((tag) => ({
    name: tag.trim(),
    slug: `/tags/${tag.trim().toLowerCase().replace(" ", "-")}`,
    color: getRandomColor(), // Assign a random color from the predefined set
  }))

  const newBlog = {
    title: answers.title,
    description: answers.description,
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpg",
      slug: "/authors/mohit",
    },
    image: `/blogs/${answers.slug}/cover.jpg`,
    slug: `/blogs/${answers.slug}`,
    tags: tags,
    createdAt: Date.now(),
  }

  // Read the current blogs array from blogs.ts
  const blogsData = fs.readFileSync(blogsFilePath, "utf-8")

  // Update the blogs array
  const updatedBlogs = blogsData.replace(
    /(\[.*?])/s,
    (match) =>
      `${match.slice(0, -1)},\n  ${JSON.stringify(newBlog, null, 2)}\n]`
  )

  // Write the updated content back to blogs.ts
  fs.writeFileSync(blogsFilePath, updatedBlogs, "utf-8")

  // Create the new folder and files
  const blogFolderPath = path.join(__dirname, "src/app/blogs", answers.slug)
  fs.mkdirSync(blogFolderPath, { recursive: true })

  // Create page.mdx and layout.tsx files
  const pageMdxContent = `import Image from "next/image"

# ${answers.title}

![${answers.title}](/blogs/${answers.slug}/cover.jpg)

<div className="flex justify-between items-end gap-10 border-b border-slate-200 pb-4">
  <div className="flex items-center gap-2">
    <div className="relative w-12 h-12 rounded-full overflow-hidden">
      <Image
        src="/authors/mohit.jpg"
        alt="Mohit Kumar"
        fill
        objectFit="cover"
      />
    </div>
    <div className="flex flex-col">
      <h2 className="font-bold">Mohit Kumar</h2>
      <span className="text-sm text-green-500">6 min read</span>
    </div>
  </div>
  <h2 className="font-mono font-medium text-sm">19 Jan 2025</h2>
</div>

${answers.description}

`

  const layoutTsxContent = `import { Metadata } from "next"

export const metadata: Metadata = {
  title: "${answers.title}",
  description: "${answers.description}",
  openGraph: {
    images: "/blogs/${answers.slug}/cover.jpg",
  },
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-6 xl:px-8 gap-6 text-xl py-10">
      {children}
    </div>
  )
}
`

  fs.writeFileSync(
    path.join(blogFolderPath, "page.mdx"),
    pageMdxContent,
    "utf-8"
  )
  fs.writeFileSync(
    path.join(blogFolderPath, "layout.tsx"),
    layoutTsxContent,
    "utf-8"
  )

  // Create the cover image placeholder (you can replace it with your actual image)
  fs.writeFileSync(path.join(blogFolderPath, "cover.jpg"), "", "utf-8") // Empty placeholder file
}

// Function to get a random color from the list
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * tagColors.length)
  return tagColors[randomIndex]
}

// Run the function to create a new blog
createBlog().catch(console.error)

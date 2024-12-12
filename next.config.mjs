import rehypePrettyCode from "rehype-pretty-code"
import nextMDX from "@next/mdx"
import { transformerNotationDiff } from "@shikijs/transformers"

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "catppuccin-latte",
  transformers: [transformerNotationDiff()],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

export default withMDX(nextConfig)

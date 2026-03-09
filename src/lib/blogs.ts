export interface BlogTag {
  name: string
  slug: string
  color: string
}

export interface BlogAuthor {
  name: string
  image: string
  slug: string
}

export interface Blog {
  title: string
  description: string
  author: BlogAuthor
  image: string
  slug: string
  readTime: number
  tags: BlogTag[]
  createdAt: number
  series?: BlogSeriesMeta
}

export interface RelatedBlog {
  blog: Blog
  sharedTags: BlogTag[]
  score: number
}

export interface BlogSeriesMeta {
  id: string
  title: string
  description: string
  part: number
}

export interface BlogSeriesDetail {
  id: string
  title: string
  description: string
  blogs: Blog[]
  currentIndex: number
}

const subxtractToPetalSeries = {
  id: "subxtract-to-petal",
  title: "SubXtract to Petal",
  description:
    "Follow the original app, the rebuild, and the production lessons shaping Petal.",
} as const

export const blogs: Blog[] = [
  {
    title: "Understanding Compound Components in React",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "Compound components are a powerful pattern in React that allows you to create flexible and reusable UI components. This pattern can help you build more maintainable and scalable applications by separating concerns and providing a clean API for your components.",
    image: "/blogs/compound-components/cover.jpg",
    slug: "/blogs/compound-components",
    readTime: 5,
    tags: [
      {
        name: "React",
        slug: "/tags/react",
        color: "text-violet-500",
      },
    ],
    createdAt: 1720952539000,
  },
  {
    title: "Master animations in React Native with Reanimated 2",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "React Native Reanimated 2 is a powerful library that allows you to create high-performance animations and interactions in your React Native applications. This library is built on top of Reanimated and provides a simple and intuitive API for creating complex animations.",
    image: "/blogs/mastering-react-native-reanimated-2/cover.jpg",
    slug: "/blogs/mastering-react-native-reanimated-2",
    readTime: 7,
    tags: [
      {
        name: "React Native",
        slug: "/tags/react-native",
        color: "text-blue-500",
      },
      {
        name: "Reanimated",
        slug: "/tags/reanimated",
        color: "text-green-500",
      },
    ],
    createdAt: 1721470939000,
  },
  {
    title: "Implementing Custom Theming in a React Native App",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "Theming is essential for creating consistent and visually appealing user interfaces in mobile apps. It allows for easy customization and ensures your app can adapt to user preferences, like light or dark modes. In this blog post, I’ll walk you through how I implemented custom theming in my React Native app.",
    image: "/blogs/theming-in-react-native/cover.jpg",
    slug: "/blogs/theming-in-react-native",
    readTime: 6,
    tags: [
      {
        name: "React Native",
        slug: "/tags/react-native",
        color: "text-blue-500",
      },
      {
        name: "React Navigation",
        slug: "/tags/react-navigation",
        color: "text-pink-500",
      },
      {
        name: "Context API",
        slug: "/tags/context-api",
        color: "text-purple-500",
      },
    ],
    createdAt: 1733394139000,
  },
  {
    title: "Advanced Hooks Pattern and Techniques",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "React Hooks revolutionized the way we write React components, providing a more direct API to React’s core features. While basic hooks like useState and useEffect are widely known, there’s a world of advanced hook patterns that can dramatically improve your React application’s architecture, performance, and maintainability.",
    image: "/blogs/advanced-hooks-pattern-and-techniques/cover.jpg",
    slug: "/blogs/advanced-hooks-pattern-and-techniques",
    readTime: 8,
    tags: [
      {
        name: "React",
        slug: "/tags/react",
        color: "text-violet-500",
      },
      {
        name: "Hooks",
        slug: "/tags/hooks",
        color: "text-blue-500",
      },
    ],
    createdAt: 1733566939000,
  },
  {
    title: "Exploring the Latest React 19 ",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "React, the popular JavaScript library for building user interfaces, has reached a significant milestone with the release of React 19. Officially released on December 5, 2024, this version brings a slew of exciting updates and improvements that aim to enhance the development experience and the performance of React applications. In this blog post, we’ll dive into the key features and changes introduced in React 19.",
    image: "/blogs/exploring-the-latest-react-19/cover.jpg",
    slug: "/blogs/exploring-the-latest-react-19",
    readTime: 5,
    tags: [
      {
        name: "React",
        slug: "/tags/react",
        color: "text-violet-500",
      },
      {
        name: "Version Release",
        slug: "/tags/version-release",
        color: "text-green-500",
      },
    ],
    createdAt: 1733576845000,
  },
  {
    title: "Using Native Code in React Native: A Beginner’s Guide",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "Learn how to integrate custom native modules into your React Native app to unlock the full power of the platform.",
    image: "/blogs/native-code-in-react-native/cover.jpg",
    slug: "/blogs/native-code-in-react-native",
    readTime: 6,
    tags: [
      {
        name: "React Native",
        slug: "/tags/react-native",
        color: "text-blue-500",
      },
      {
        name: "Native Code",
        slug: "/tags/native-code",
        color: "text-green-500",
      },
    ],
    createdAt: 1734015497000,
  },
  {
    title: "Simplifying Side Effects: Dependencies in React’s useEffect",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "Dive into the nuances of managing dependencies in React’s useEffect hook. This detailed guide uncovers common challenges, solutions, and practical techniques to write cleaner and more efficient side effects in your React applications.",
    image: "/blogs/simplifying-side-effects-useeffect-dependencies/cover.jpg",
    slug: "/blogs/simplifying-side-effects-useeffect-dependencies",
    readTime: 7,
    tags: [
      {
        name: "React",
        slug: "/tags/react",
        color: "text-violet-500",
      },
      {
        name: "Hooks",
        slug: "/tags/hooks",
        color: "text-blue-500",
      },
      {
        name: "useEffect",
        slug: "/tags/useeffect",
        color: "text-purple-500",
      },
    ],
    createdAt: 1735061913000,
  },
  {
    title: "Realtime Collaboration with React",
    description:
      "A comprehensive guide on building real-time collaborative applications with React using tools like WebSockets and WebRTC.",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    image: "/blogs/realtime-collaboration-with-react/cover.jpg",
    slug: "/blogs/realtime-collaboration-with-react",
    readTime: 8,
    tags: [
      {
        name: "React",
        slug: "/tags/react",
        color: "text-violet-500",
      },
      {
        name: "WASM",
        slug: "/tags/wasm",
        color: "text-green-500",
      },
      {
        name: "WebRTC",
        slug: "/tags/webrtc",
        color: "text-red-500",
      },
    ],
    createdAt: 1737276629000,
  },
  {
    title: "From SubXtract to Petal — Rebuilding with AI and a New Mindset",
    description:
      "How Apple's broken payment gateway, my brother's dev account, and a year of AI-assisted development led me to build Petal — a better subscription tracker.",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    image: "/blogs/from-subxtract-to-petal/cover.jpg",
    slug: "/blogs/from-subxtract-to-petal",
    readTime: 7,
    tags: [
      {
        name: "AI Dev",
        slug: "/tags/ai-dev",
        color: "text-violet-500",
      },
      {
        name: "React Native",
        slug: "/tags/react-native",
        color: "text-blue-500",
      },
      {
        name: "Indie Dev",
        slug: "/tags/indie-dev",
        color: "text-orange-500",
      },
    ],
    createdAt: 1771718400000,
    series: {
      ...subxtractToPetalSeries,
      part: 2,
    },
  },
  {
    title:
      "My App Was Crashing in Production and I Had No Idea Why",
    description:
      "How a missing env variable, a splash screen trap, and a side effect in useMemo led to a production crash — and the debugging methodology that uncovered it all, layer by layer.",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    image: "/blogs/debugging-production-crash-expo/cover.jpg",
    slug: "/blogs/debugging-production-crash-expo",
    readTime: 8,
    tags: [
      {
        name: "React Native",
        slug: "/tags/react-native",
        color: "text-blue-500",
      },
      {
        name: "Expo",
        slug: "/tags/expo",
        color: "text-green-500",
      },
      {
        name: "Debugging",
        slug: "/tags/debugging",
        color: "text-red-500",
      },
    ],
    createdAt: 1773100800000,
    series: {
      ...subxtractToPetalSeries,
      part: 3,
    },
  },
  {
    title: "SubXtract - A Subscription Tracker App",
    description: "My new Subscription Tracker app",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    image: "/blogs/subxtract/cover.jpg",
    slug: "/blogs/subxtract",
    readTime: 6,
    tags: [
      {
        name: "react native",
        slug: "/tags/react-native",
        color: "text-blue-500",
      },
      {
        name: "expo",
        slug: "/tags/expo",
        color: "text-green-500",
      },
      {
        name: "zustand",
        slug: "/tags/zustand",
        color: "text-yellow-500",
      },
      {
        name: "reanimated",
        slug: "/tags/reanimated",
        color: "text-orange-500",
      },
    ],
    createdAt: 1745073944960,
    series: {
      ...subxtractToPetalSeries,
      part: 1,
    },
  },
];

const STOP_WORDS = new Set([
  "about",
  "after",
  "again",
  "app",
  "apps",
  "build",
  "building",
  "debug",
  "from",
  "guide",
  "have",
  "into",
  "just",
  "latest",
  "learn",
  "more",
  "post",
  "production",
  "react",
  "still",
  "that",
  "this",
  "using",
  "with",
  "your",
])

function normalizeTag(value: string) {
  return value.trim().toLowerCase()
}

function getKeywordSet(blog: Blog) {
  return new Set(
    `${blog.title} ${blog.description}`
      .toLowerCase()
      .split(/[^a-z0-9]+/g)
      .filter((word) => word.length >= 4 && !STOP_WORDS.has(word))
  )
}

export function getBlogSeries(slug: string): BlogSeriesDetail | null {
  const currentBlog = blogs.find((blog) => blog.slug === slug)

  if (!currentBlog?.series) {
    return null
  }

  const seriesBlogs = blogs
    .filter((blog) => blog.series?.id === currentBlog.series?.id)
    .sort(
      (a, b) =>
        (a.series?.part ?? Number.MAX_SAFE_INTEGER) -
          (b.series?.part ?? Number.MAX_SAFE_INTEGER) ||
        a.createdAt - b.createdAt
    )

  return {
    id: currentBlog.series.id,
    title: currentBlog.series.title,
    description: currentBlog.series.description,
    blogs: seriesBlogs,
    currentIndex: seriesBlogs.findIndex((blog) => blog.slug === slug),
  }
}

export function getRelatedBlogs(slug: string, limit = 3): RelatedBlog[] {
  const currentBlog = blogs.find((blog) => blog.slug === slug)

  if (!currentBlog) {
    return []
  }

  const currentSeriesId = currentBlog.series?.id

  const sortedBlogs = [...blogs].sort((a, b) => b.createdAt - a.createdAt)
  const currentKeywords = getKeywordSet(currentBlog)
  const primaryTag = currentBlog.tags[0]
  const newestCreatedAt = sortedBlogs[0]?.createdAt ?? currentBlog.createdAt
  const oldestCreatedAt =
    sortedBlogs[sortedBlogs.length - 1]?.createdAt ?? currentBlog.createdAt
  const recencyRange = Math.max(1, newestCreatedAt - oldestCreatedAt)

  return sortedBlogs
    .filter(
      (blog) =>
        blog.slug !== slug &&
        (!currentSeriesId || blog.series?.id !== currentSeriesId)
    )
    .map((blog) => {
      const sharedTags = blog.tags.filter((tag) =>
        currentBlog.tags.some(
          (currentTag) =>
            normalizeTag(currentTag.slug) === normalizeTag(tag.slug) ||
            normalizeTag(currentTag.name) === normalizeTag(tag.name)
        )
      )
      const sharedKeywordCount = Array.from(getKeywordSet(blog)).filter(
        (keyword) => currentKeywords.has(keyword)
      ).length
      const recencyScore = (blog.createdAt - oldestCreatedAt) / recencyRange
      const primaryTagBonus = primaryTag
        ? sharedTags.some(
            (tag) =>
              normalizeTag(tag.slug) === normalizeTag(primaryTag.slug) ||
              normalizeTag(tag.name) === normalizeTag(primaryTag.name)
          )
          ? 2
          : 0
        : 0

      return {
        blog,
        sharedTags,
        score:
          sharedTags.length * 6 +
          primaryTagBonus +
          sharedKeywordCount * 1.25 +
          recencyScore,
      }
    })
    .sort(
      (a, b) =>
        b.score - a.score || b.blog.createdAt - a.blog.createdAt
    )
    .slice(0, limit)
}

export const blogs = [
  {
    title: "Async Await Is The Worst Thing To Happen To Programming",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "I recently saw this meme about async and await. It’s so good. It captures exactly how I feel about async and await. If you wait for async code your function now has to be async as well. And if there’s any function relying on that function that code also has to be async and on and on and on. Until you reach the top level.",
    image: "/blogs/async-await/async-await.png",
    slug: "/blogs/async-await",
    tags: [
      {
        name: "React",
        slug: "/tags/react",
        color: "text-violet-500",
      },
      {
        name: "JavaScript",
        slug: "/tags/javascript",
        color: "text-yellow-400",
      },
      {
        name: "Async Await",
        slug: "/tags/async-await",
        color: "text-blue-500",
      },
    ],
  },
  {
    title: "React Native App performance is a myth?",
    author: {
      name: "Mohit Kumar",
      image: "/authors/mohit.jpeg",
      slug: "/authors/mohit",
    },
    description:
      "To build cross-platform mobile apps using JavaScript and React, React Native is a popular framework. Leveraging native UI components and APIs enables developers to streamline code across platforms. However, React Native faces challenges affecting performance and developer engagement.",
    image: "/blogs/react-native-screens/react-native-screens.jpg",
    slug: "/blogs/react-native-screens",
    tags: [
      {
        name: "React Native",
        slug: "/tags/react-native",
        color: "text-indigo-500",
      },
      {
        name: "JavaScript",
        slug: "/tags/javascript",
        color: "text-yellow-400",
      },
      {
        name: "Performance",
        slug: "/tags/performance",
        color: "text-red-400",
      },
    ],
  },
]

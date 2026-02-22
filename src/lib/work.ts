const CAREER_START_DATE = new Date(2020, 6, 1); // July 2021

export function getYearsOfExperience(): number {
  const now = new Date();
  const years = now.getFullYear() - CAREER_START_DATE.getFullYear();
  const monthDiff = now.getMonth() - CAREER_START_DATE.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < CAREER_START_DATE.getDate())
  ) {
    return years - 1;
  }
  return years;
}

export const work = [
  {
    title: "Xurrent IMR",
    position: "Staff Software Engineer",
    description:
      "Zenduty’s end-to-end incident alerting, on-call management and response orchestration platform helps you institutionalize reliability into your production operations.",
    image: "/work/xurrent-imr.svg",
    url: "https://www.xurrent.com/incident-management-response",
    joined: "July 2024",
    slug: "/work/xurrent-imr",
    stack: [
      {
        name: "Expo",
        color: "border-blue-100",
        accent: "text-blue-1000",
      },
      {
        name: "React Native",
        color: "border-red-100",
        accent: "text-red-600",
      },
      {
        name: "Python (Django)",
        color: "border-purple-100",
        accent: "text-purple-600",
      },
      {
        name: "Typescript",
        color: "border-yellow-100",
        accent: "text-yellow-600",
      },
    ],
    current: true,
  },
  {
    title: "Fijit",
    position: "Senior Software Developer",
    description:
      "Fijit is the home of hyper-casual meme games! Compete in duel challenges and tournaments to win big prizes and show off your skills.",
    image: "/work/fijit.png",
    url: "https://fijit.club",
    joined: "June 2023",
    slug: "/work/fijit",
    stack: [
      {
        name: "React Native",
        color: "border-red-100",
        accent: "text-red-600",
      },
      {
        name: "Next.js",
        color: "border-green-100",
        accent: "text-green-600",
      },
    ],
    current: false,
  },
  {
    title: "Streak",
    position: "Senior Software Developer",
    description:
      "Streak empowers retail trading community by democratising privileged trading technology. With Streak, retail traders can create, backtest and deploy trading strategies live in the stock markets.",
    image: "/work/streak.png",
    url: "https://streak.tech",
    joined: "April 2021",
    slug: "/work/streak",
    stack: [
      {
        name: "React.js",
        color: "border-blue-100",
        accent: "text-blue-1000",
      },
      {
        name: "React Native",
        color: "border-red-100",
        accent: "text-red-600",
      },
      {
        name: "Next.js",
        color: "border-green-100",
        accent: "text-green-600",
      },
      {
        name: "Node.js",
        color: "border-yellow-100",
        accent: "text-yellow-600",
      },
      {
        name: "Golang",
        color: "border-purple-100",
        accent: "text-purple-600",
      },
    ],
    current: false,
  },
];

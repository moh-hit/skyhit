export interface ProjectLink {
  label: string
  href: string
  external?: boolean
}

export interface Project {
  name: string
  tagline: string
  description: string
  icon: string
  slug: string
  stack: string[]
  features: string[]
  links: ProjectLink[]
  status: "Live" | "Beta" | "Coming Soon" | "Archived"
  color: string
}

export const projects: Project[] = [
  {
    name: "Maffs",
    tagline: "Scientific Calculator with AI, Graphs & 6 Themes",
    description:
      "A calculator app that goes beyond the basics — featuring a hand-written recursive descent parser, AI-powered Nerd Mode for plain-English math, interactive graph plotting, unit conversion, and a theme system where every theme has its own personality.",
    icon: "/projects/maffs-icon.png",
    slug: "maffs",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "RevenueCat",
      "Zustand",
      "MMKV",
      "Claude AI",
    ],
    features: [
      "Recursive descent expression parser — no eval()",
      "AI-powered Nerd Mode with step-by-step breakdowns",
      "Plot up to 6 functions with pinch-to-zoom and trace",
      "8-category unit converter with inline expression support",
      "6 themes with unique typography, radii, and vibe",
      "3 subscription tiers via RevenueCat",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/maffs-calculator-more/id6760940442",
        external: true,
      },
      {
        label: "maffs.skyhit.app",
        href: "https://maffs.skyhit.app",
        external: true,
      },
      {
        label: "Read the story",
        href: "/blogs/maffs-iap-journey",
      },
      {
        label: "Under the hood",
        href: "/blogs/maffs-under-the-hood",
      },
    ],
    status: "Live",
    color: "#FFD600",
  },
  {
    name: "Petal",
    tagline: "Track Subscriptions, Save Money",
    description:
      "A subscription tracker that helps you stay on top of recurring payments. Multi-currency support, social subscription sharing, trial management, local-first sync queues, and a design system that makes managing money feel good.",
    icon: "/projects/petal-icon.png",
    slug: "petal",
    stack: [
      "React Native",
      "Expo",
      "Zustand",
      "Reanimated",
      "MMKV",
      "Supabase",
    ],
    features: [
      "Multi-currency with live exchange rates",
      "Social subscription sharing between users",
      "Smart trial and renewal reminders",
      "Local-first architecture with sync queues",
      "Spending analytics and category breakdowns",
      "Beautiful UI with smooth Reanimated transitions",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/petal-track-subscriptions/id6759523098",
        external: true,
      },
      {
        label: "petal.skyhit.app",
        href: "https://petal.skyhit.app",
        external: true,
      },
      {
        label: "Read the story",
        href: "/blogs/from-subxtract-to-petal",
      },
    ],
    status: "Live",
    color: "#B8F26D",
  },
]

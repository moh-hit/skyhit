import { IconGitPullRequest, IconTerminal2, TablerIcon } from "@tabler/icons-react"

export interface ProjectLink {
  label: string
  href: string
  external?: boolean
}

export interface Project {
  name: string
  tagline: string
  description: string
  icon?: string
  iconComponent?: TablerIcon
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
  {
    name: "Pulley",
    tagline: "GitHub PRs in your macOS menu bar",
    description:
      "A tiny native macOS menu-bar app that keeps all your open GitHub pull requests one click away. Each PR's branch is checked out as a git worktree, so your main checkout stays clean while you review and switch context freely.",
    iconComponent: IconGitPullRequest,
    slug: "pulley",
    stack: ["Swift", "macOS", "GitHub API", "Git Worktrees"],
    features: [
      "Menu-bar access to all open pull requests at a glance",
      "One-click branch checkout as an isolated git worktree",
      "Main checkout always stays untouched",
      "Lightweight native Swift app — no Electron",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/moh-hit/pulley",
        external: true,
      },
    ],
    status: "Live",
    color: "#6E40C9",
  },
  {
    name: "LocalPorts",
    tagline: "A beautiful TUI for managing localhost ports on macOS",
    description:
      "An interactive terminal UI for finding, inspecting, and killing processes bound to localhost ports. Cuts the mental overhead of juggling dev servers and stale processes — all from a single, beautiful command.",
    iconComponent: IconTerminal2,
    slug: "localports",
    stack: ["TypeScript", "Node.js"],
    features: [
      "Interactive TUI listing all active localhost ports",
      "Kill processes directly without memorizing lsof flags",
      "Process name, PID, and port at a glance",
      "Fast, dependency-light CLI tool",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/moh-hit/localports",
        external: true,
      },
    ],
    status: "Live",
    color: "#22C55E",
  },
]

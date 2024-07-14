import type { Metadata } from "next"
import {
  DM_Sans as FontSans,
  Spline_Sans_Mono as FontMono,
} from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/ui/header"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Mohit Kumar - Software Developer",
  description:
    "Mohit Kumar's personal website, a React Native, React and Nextjs developer. Have decent experience in golang and Nodejs as backend. Have worked in multiple domains like Fintech, Gaming, SaaS.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased h-screen bg-[url('/grid.png')] bg-contain bg-start bg-no-repeat",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Header />
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}

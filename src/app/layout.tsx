import type { Metadata } from "next"
import { DM_Sans as FontSans, Honk as FontDisplay } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/ui/header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Mohit - Software Developer",
  description: "Mohit Kumar's personal website",
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
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { getYearsOfExperience } from "@/lib/work";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const metadataBase = process.env.NEXT_PUBLIC_SITE_URL || "https://skyhit.app";

// Hanken Grotesk — modern grotesque for headings & body
const fontDisplay = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontSans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

// JetBrains Mono — reserved for the technical chrome (labels, meta, code)
const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mohit Kumar — Software Engineer",
  description: `Senior Software Engineer with ${getYearsOfExperience()}+ years crafting digital experiences across React, React Native, and Next.js. Currently building at Xurrent IMR.`,
  metadataBase: new URL(metadataBase),
  openGraph: {
    images: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-sans antialiased min-h-screen",
          fontDisplay.variable,
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <Header />
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

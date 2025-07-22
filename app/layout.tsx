import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arc-Tech | Premium AI Agents & Technology Solutions",
  description:
    "Discover cutting-edge AI agents and technology solutions designed for the future. Premium quality, advanced capabilities, and seamless integration.",
  keywords: ["AI", "artificial intelligence", "technology", "automation", "premium", "agents"],
  authors: [{ name: "Arc-Tech" }],
  creator: "Arc-Tech",
  publisher: "Arc-Tech",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arctech.vercel.app",
    title: "Arc-Tech | Premium AI Agents & Technology Solutions",
    description: "Discover cutting-edge AI agents and technology solutions designed for the future.",
    siteName: "Arc-Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc-Tech | Premium AI Agents & Technology Solutions",
    description: "Discover cutting-edge AI agents and technology solutions designed for the future.",
    creator: "@arctech",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

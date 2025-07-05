import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { CartDrawer } from "@/components/CartDrawer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Arc-Tech | AI-Powered Digital Agents",
  description:
    "Discover the future of AI with Arc-Tech's collection of intelligent digital agents. Each agent is a sophisticated AI companion designed to enhance your digital experience.",
  keywords: "AI agents, digital assistants, artificial intelligence, 3D robots, Arc-Tech",
  authors: [{ name: "Hamza Alnasir" }],
  creator: "Hamza Alnasir",
  openGraph: {
    title: "Arc-Tech | AI-Powered Digital Agents",
    description: "Discover the future of AI with sophisticated digital agents",
    url: "https://arc-tech.vercel.app",
    siteName: "Arc-Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arc-Tech AI Agents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc-Tech | AI-Powered Digital Agents",
    description: "Discover the future of AI with sophisticated digital agents",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
          <Navbar />
          <main>{children}</main>
          <CartDrawer />
          <Toaster />
        </div>
      </body>
    </html>
  )
}

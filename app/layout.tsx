import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sumit Rai — Software Developer | Scalable Backends, Mobile & AI Integrations",
icons: {
  icon:  "https://cdn-icons-png.flaticon.com/512/2910/2910766.png",
},
  description:
    "Software developer focused on scalable backend systems, mobile & web apps with Java, Spring Boot, Kafka, Redis, React Native, MERN, Docker, and AI integrations.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

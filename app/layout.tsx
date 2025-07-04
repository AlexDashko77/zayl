import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from "next/font/google"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Activity Monitoring",
  description: "Track and boost employee productivity",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body className = "text-[#404040]">{children}</body>
    </html>
  )
}
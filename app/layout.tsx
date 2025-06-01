import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aniket Purohit - DevOps Engineer | Cloud Enthusiast",
  description:
    "Portfolio of Aniket Purohit, a passionate DevOps Engineer and Cloud Enthusiast specializing in automation, infrastructure management, and modern deployment practices.",
  keywords: "DevOps, Cloud Computing, AWS, GCP, Azure, Kubernetes, Docker, CI/CD, Infrastructure as Code, Terraform",
  authors: [{ name: "Aniket Purohit" }],
  openGraph: {
    title: "Aniket Purohit - DevOps Engineer | Cloud Enthusiast",
    description: "Portfolio showcasing DevOps projects, cloud solutions, and automation expertise.",
    url: "https://aniketpurohit.dev",
    siteName: "Aniket Purohit Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniket Purohit - DevOps Engineer",
    description: "DevOps Engineer specializing in cloud infrastructure and automation.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

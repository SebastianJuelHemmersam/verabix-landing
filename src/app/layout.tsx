import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Verabix — All-in-one marketing platform with Vera AI',
  description: 'Verabix unifies Meta Ads, Google Ads, email, SMS and analytics into one platform — with Vera, the AI that finds the next optimization and asks before anything goes live.',
  keywords: 'marketing platform, Meta Ads, Google Ads, email marketing, analytics, AI analyst, Vera',
  openGraph: {
    title: 'Verabix — All your marketing tools. One intelligent core.',
    description: 'Ads, email, SMS and analytics in one place — with Vera, the AI that finds the next optimization and asks before anything goes live.',
    url: 'https://verabix.com',
    siteName: 'Verabix',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono    = JetBrains_Mono({   subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Verabix — Meta Ads, Google Ads & GA4 in one dashboard, with Vera AI',
  description: 'Verabix unifies Meta Ads, Google Ads and Google Analytics into one dashboard. Vera, your AI marketing analyst, answers performance questions in-app and in Slack.',
  keywords: 'marketing analytics, Meta Ads, Google Ads, Google Analytics, dashboard, ROAS, attribution, AI analyst',
  openGraph: {
    title: 'Verabix — Meta Ads, Google Ads & GA4 in one dashboard',
    description: 'Unified marketing analytics with Vera AI — answers performance questions in-app and in Slack.',
    url: 'https://verabix.com',
    siteName: 'Verabix',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

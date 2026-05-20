import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono    = JetBrains_Mono({   subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Verabix — The truth of your business',
  description: 'Verabix unifies your Meta Ads, Google Ads and Google Analytics data in one powerful dashboard — so you can make smarter decisions faster.',
  keywords: 'marketing analytics, Meta Ads, Google Ads, Google Analytics, dashboard, ROAS, attribution',
  openGraph: {
    title: 'Verabix — The truth of your business',
    description: 'Unify your ad data. Make smarter decisions faster.',
    url: 'https://verabix.com',
    siteName: 'Verabix',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

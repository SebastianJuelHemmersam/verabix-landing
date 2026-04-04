import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

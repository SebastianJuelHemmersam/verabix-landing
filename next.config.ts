import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/product/instant-campaigns', destination: '/product/campaigns', permanent: true },
      { source: '/product/advanced-wizard',   destination: '/product/campaigns', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig

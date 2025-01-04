import type { NextConfig } from 'next'

const { BLOG_DOMAIN, PLAYGROUND_DOMAIN } = process.env

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: `${BLOG_DOMAIN}/blog/`,
      },
      {
        source: '/blog/:path+',
        destination: `${BLOG_DOMAIN}/blog/:path+/`,
      },
      {
        source: '/blog-static/:path+',
        destination: `${BLOG_DOMAIN}/blog-static/:path+/`,
      },
      {
        source: '/playground',
        destination: `${PLAYGROUND_DOMAIN}/playground/`,
      },
      {
        source: '/playground/:path+',
        destination: `${PLAYGROUND_DOMAIN}/playground/:path+/`,
      },
      {
        source: '/playground-static/:path+',
        destination: `${PLAYGROUND_DOMAIN}/playground-static/:path+/`,
      },
    ]
  },
}

export default nextConfig

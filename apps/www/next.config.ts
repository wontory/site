import type { NextConfig } from 'next'

const { BLOG_DOMAIN, PLAYGROUND_DOMAIN } = process.env

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: '/blog',
      destination: `${BLOG_DOMAIN}`,
    },
    {
      source: '/blog/:path+',
      destination: `${BLOG_DOMAIN}/:path+`,
    },
    {
      source: '/blog-static/:path+',
      destination: `${BLOG_DOMAIN}/blog-static/:path+`,
    },
    {
      source: '/playground',
      destination: `${PLAYGROUND_DOMAIN}`,
    },
    {
      source: '/playground/:path+',
      destination: `${PLAYGROUND_DOMAIN}/:path+`,
    },
    {
      source: '/playground-static/:path+',
      destination: `${PLAYGROUND_DOMAIN}/playground-static/:path+`,
    },
  ],
}

export default nextConfig

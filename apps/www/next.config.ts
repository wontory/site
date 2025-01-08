import type { NextConfig } from 'next'

const { BLOG_DOMAIN, CRAFT_DOMAIN } = process.env

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
      source: '/blog-static/:path*',
      destination: `${BLOG_DOMAIN}/blog-static/:path*`,
    },
    {
      source: '/craft',
      destination: `${CRAFT_DOMAIN}`,
    },
    {
      source: '/craft/:path+',
      destination: `${CRAFT_DOMAIN}/:path+`,
    },
    {
      source: '/craft-static/:path*',
      destination: `${CRAFT_DOMAIN}/craft-static/:path*`,
    },
  ],
}

export default nextConfig

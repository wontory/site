import type { NextConfig } from 'next'

const { BLOG_DOMAIN, PLAYGROUND_DOMAIN } = process.env

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: '/blog',
      destination: `${BLOG_DOMAIN ?? 'https://preview.blog.wontory.dev'}/blog/`,
    },
    {
      source: '/blog/:path+',
      destination: `${BLOG_DOMAIN ?? 'https://preview.blog.wontory.dev'}/blog/:path+/`,
    },
    {
      source: '/blog-static/:path+',
      destination: `${BLOG_DOMAIN ?? 'https://preview.blog.wontory.dev'}/blog-static/:path+/`,
    },
    {
      source: '/playground',
      destination: `${PLAYGROUND_DOMAIN ?? 'https://preview.playground.wontory.dev'}/playground/`,
    },
    {
      source: '/playground/:path+',
      destination: `${PLAYGROUND_DOMAIN ?? 'https://preview.playground.wontory.dev'}/playground/:path+/`,
    },
    {
      source: '/playground-static/:path+',
      destination: `${PLAYGROUND_DOMAIN ?? 'https://preview.playground.wontory.dev'}/playground-static/:path+/`,
    },
  ],
}

export default nextConfig

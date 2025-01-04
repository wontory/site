import type { NextConfig } from 'next'

const { BLOG_DOMAIN, PLAYGROUND_DOMAIN } = process.env ?? {
  BLOG_DOMAIN: 'https://preview.blog.wontory.dev/blog',
  PLAYGROUND_DOMAIN: 'https://preview.playground.wontory.dev/playground',
}

const nextConfig: NextConfig = {
  rewrites: async () => [
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
  ],
}

export default nextConfig

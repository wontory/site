import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import { pretendard } from '@package/ui/fonts/pretendard'
import { BaseLayout } from '@package/ui/layouts/base-layout'
import { PrefetchCrossZoneLinks } from '@package/ui/scripts/prefetch-cross-zone-links'

import '#styles/globals.css'

export const metadata: Metadata = {
  title: { template: '%s | Wontory', default: 'Blog | Wontory' },
  description: 'My precious thoughts and inspirations.',
  openGraph: {
    title: { template: '%s | Wontory', default: 'Blog | Wontory' },
    description: 'My precious thoughts and inspirations.',
    siteName: 'Wontory',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    title: { template: '%s | Wontory', default: 'Blog | Wontory' },
    description: 'My precious thoughts and inspirations.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body>
        <BaseLayout path="/blog">{children}</BaseLayout>
        <PrefetchCrossZoneLinks hrefs={['/', '/craft']} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import { pretendard } from '@package/ui/fonts/pretendard'
import { BaseLayout } from '@package/ui/layouts/base-layout'
import { PrefetchCrossZoneLinks } from '@package/ui/scripts/prefetch-cross-zone-links'

import '@package/ui/styles/globals.css'

export const metadata: Metadata = {
  title: { template: '%s | Wontory', default: 'Craft | Wontory' },
  description: "Some boring things I've created for fun.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body>
        <BaseLayout path="/craft">{children}</BaseLayout>
        <PrefetchCrossZoneLinks hrefs={['/', '/blog']} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

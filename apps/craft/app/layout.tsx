import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import { pretendard } from '@package/ui/fonts/pretendard'
import { BaseLayout } from '@package/ui/layouts/base-layout'
import { PrefetchCrossZoneLinks } from '@package/ui/scripts/prefetch-cross-zone-links'

import '@package/ui/styles/globals.css'

export const metadata: Metadata = {
  title: 'Craft | Wontory',
  description: 'Generated by create next app',
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

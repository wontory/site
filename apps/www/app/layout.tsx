import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import { pretendard } from '@package/ui/fonts/pretendard'
import { BaseLayout } from '@package/ui/layouts/base-layout'
import { PrefetchCrossZoneLinks } from '@package/ui/scripts/prefetch-cross-zone-links'

import '@package/ui/styles/globals.css'

export const metadata: Metadata = {
  title: { template: '%s | Wontory', default: 'Wontory' },
  description:
    'A front-end developer focused on UX, leveraging animations and interactions for meaningful experiences. Quickly learns and applies new technologies, actively contributing by analyzing documentation and suggesting improvements.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body>
        <BaseLayout path="/">{children}</BaseLayout>
        <PrefetchCrossZoneLinks hrefs={['/blog', '/craft']} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

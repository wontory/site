import type { Metadata } from 'next'

import { PrefetchCrossZoneLinks } from '@package/component/prefetch-cross-zone-links'
import { pretendard } from '@package/ui/fonts/pretendard'
import { BaseLayout } from '@package/ui/layouts/base-layout'

import '@package/ui/styles/globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <BaseLayout>{children}</BaseLayout>
        <PrefetchCrossZoneLinks hrefs={['/blog', '/playground']} />
      </body>
    </html>
  )
}

import { SiteFooter, SiteHeader } from '#layouts/base-layout.client'

interface BaseLayoutProps {
  path: string
  children: React.ReactNode
}

function BaseLayout({ path, children }: BaseLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader path={path} />
      <main className="container mx-auto flex flex-1 flex-col gap-8 px-4 pt-6 pb-18">
        {children}
      </main>
      <SiteFooter path={path} />
    </div>
  )
}

export { BaseLayout }

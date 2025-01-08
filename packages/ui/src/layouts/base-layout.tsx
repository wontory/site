const HEADER_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/craft', label: 'Craft' },
] as const

function SiteHeader() {
  return (
    <header className="container sticky top-0 mx-auto flex justify-center px-4 pt-6">
      <nav className="flex rounded-xl border bg-background shadow">
        {HEADER_NAV_LINKS.map(({ href, label }) => (
          <a href={href} key={href} className="px-4 py-2">
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="container mx-auto flex flex-col items-center gap-4 p-4">
      <div className="w-full rounded-2xl bg-primary p-10 text-primary-foreground">
        Footer
      </div>
      <span className="text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Wontory. All rights reserved.
      </span>
    </footer>
  )
}

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="container mx-auto flex flex-1 flex-col px-4 pt-6 pb-18">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

export { BaseLayout }

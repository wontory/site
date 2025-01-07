function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex min-h-dvh flex-col">
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  )
}

export { BaseLayout }

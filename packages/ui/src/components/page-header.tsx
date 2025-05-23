function PageHeader({
  children,
  title,
  description,
}: React.ComponentProps<'div'> & {
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-16 text-center transition-colors">
      <h1 className="font-semibold text-3xl text-primary-foreground transition-colors">
        {title}
      </h1>
      <span className="text-primary-foreground/60 text-sm transition-colors">
        {description}
      </span>
      {children}
    </div>
  )
}

export { PageHeader }

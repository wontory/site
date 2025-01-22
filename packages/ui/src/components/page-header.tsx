function PageHeader({
  title,
  description,
}: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-primary p-16">
      <h1 className="font-semibold text-3xl text-primary-foreground">
        {title}
      </h1>
      <span className="text-primary-foreground/60 text-sm">{description}</span>
    </div>
  )
}

export { PageHeader }

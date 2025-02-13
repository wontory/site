export interface PageHeaderProps {
  children?: React.ReactNode
  title: string
  description: string
}

function PageHeader({ children, title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-16 text-center">
      <h1 className="font-semibold text-3xl text-primary-foreground">
        {title}
      </h1>
      <span className="text-primary-foreground/60 text-sm">{description}</span>
      {children}
    </div>
  )
}

export { PageHeader }

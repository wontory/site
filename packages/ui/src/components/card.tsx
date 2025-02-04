import { cn } from '@package/utility/cn'

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {}

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground',
        className,
      )}
      {...props}
    />
  )
}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
}

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      className={cn(
        'font-semibold text-2xl leading-none tracking-tight',
        className,
      )}
      {...props}
    />
  )
}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {}

function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn('p-6 pt-0', className)} {...props} />
}

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.RefAttributes<HTMLDivElement> {}

function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
}

export { Card, CardHeader, CardFooter, CardContent, CardTitle, CardDescription }

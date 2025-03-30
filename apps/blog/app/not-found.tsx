import Link from 'next/link'

import { buttonVariants } from '@package/ui/components/button'

export default function NotFound() {
  return (
    <div className="mt-12 flex flex-1 flex-col items-center justify-center space-y-8">
      <h2 className="text-center font-medium text-8xl">Not Found</h2>
      <p className="text-center text-muted-foreground">
        Could not find requested resource
      </p>
      <Link href="/blog" className={buttonVariants()}>
        Return Blog
      </Link>
    </div>
  )
}

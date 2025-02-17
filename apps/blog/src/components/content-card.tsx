import { format } from 'date-fns'
import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@package/ui/components/card'
import { ClockIcon } from '@package/ui/icons/lucide'

import type { Memo, Post } from '#site/content'

function ContentCard({ content }: { content: Memo & Post }) {
  return (
    <Card className="overflow-hidden shadow-xs transition-colors hover:bg-primary/5">
      {content.cover && (
        <Image
          src={content.cover}
          alt={content.title}
          placeholder="blur"
          className="w-full border-b transition-colors"
        />
      )}
      <CardHeader className="pb-3">
        <span className="text-primary/60 text-sm transition-colors">
          {format(content.date, 'PPP')}
        </span>
      </CardHeader>
      <CardContent className="space-y-1 pb-3">
        <CardTitle>
          <h2 className="text-lg text-primary transition-colors">
            {content.title}
          </h2>
        </CardTitle>
        <CardDescription>
          <p className="line-clamp-2 text-muted-foreground transition-colors">
            {content.description}
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <span className="flex items-center gap-2 text-primary text-xs transition-colors">
          <ClockIcon className="size-3 text-primary transition-colors" />
          {content.metadata.readingTime} min read
        </span>
      </CardFooter>
    </Card>
  )
}

export { ContentCard }

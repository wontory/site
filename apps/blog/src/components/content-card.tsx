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
          className="w-full border-b"
        />
      )}
      <CardHeader className="pb-3">
        <span className="text-primary/60 text-sm">
          {format(content.date, 'PPP')}
        </span>
      </CardHeader>
      <CardContent className="space-y-1 pb-3">
        <CardTitle className="text-lg">{content.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {content.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <span className="flex items-center gap-2 text-xs">
          <ClockIcon className="size-3" />
          {content.metadata.readingTime} min read
        </span>
      </CardFooter>
    </Card>
  )
}

export { ContentCard }

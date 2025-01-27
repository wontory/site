import { format } from 'date-fns'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PageHeader } from '@package/ui/components/page-header'
import { CalendarIcon, ClockIcon } from '@package/ui/icons/lucide'

import { MDXContent } from '#components/mdx-content'
import { memo, post } from '#site/content'

const contents = [...memo, ...post] as const

const getContentBySlug = (slug: string) =>
  contents.find((content) => content.slug === slug)

export const generateMetadata = async ({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const slug = (await params).slug
  const content = getContentBySlug(slug)

  if (!content) return {}

  return { title: content.title, description: content.description }
}

export const generateStaticParams = () =>
  contents.map((content) => ({
    slug: content.slug,
  }))

export default async function Content({
  params,
}: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const content = getContentBySlug(slug)

  if (!content) notFound()

  return (
    <>
      <PageHeader title={content.title} description={content.description}>
        <div className="mt-6 flex gap-4">
          <span className="flex items-center gap-2 text-primary-foreground text-xs">
            <CalendarIcon className="size-3" />
            {format(content.date, 'PPP')}
          </span>
          <span className="flex items-center gap-2 text-primary-foreground text-xs">
            <ClockIcon className="size-3" />
            {content.metadata.readingTime} min read
          </span>
        </div>
      </PageHeader>
      <article className="prose dark:prose-invert mx-auto mt-8 w-full max-w-screen-md">
        <MDXContent code={content.content} />
      </article>
    </>
  )
}

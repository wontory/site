import { PageHeader } from '@package/ui/components/page-header'

import { ContentFilter } from '#app/page.client'
import { ContentList } from '#components/content-list'
import { memo, post } from '#site/content'

const getContents = (filter?: string) => {
  switch (filter) {
    case 'memo':
      return memo
    case 'post':
      return post
    default:
      return [...memo, ...post]
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const filter = (await searchParams).filter
  const contents = getContents(filter).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <>
      <PageHeader
        title="Blog"
        description="My precious thoughts and inspirations."
      />
      <ContentFilter filter={filter} />
      <ContentList contents={contents} />
    </>
  )
}

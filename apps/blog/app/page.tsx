import { Provider } from 'jotai'

import { PageHeader } from '@package/ui/components/page-header'

import { ContentFilter } from '#components/content-filter'
import { ContentList } from '#components/content-list'
import { filterStore } from '#stores/filter-store'

export default async function Home() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="My precious thoughts and inspirations."
      />
      <Provider store={filterStore}>
        <ContentFilter />
        <ContentList />
      </Provider>
    </>
  )
}

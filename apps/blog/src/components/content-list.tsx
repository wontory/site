'use client'

import { useWindowVirtualizer } from '@tanstack/react-virtual'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import useMeasure from 'react-use-measure'

import { ContentCard } from '#components/content-card'
import { memo, post } from '#site/content'
import { type Filter, filterAtom } from '#stores/filter-store'

const getContents = (filter: Filter) => {
  switch (filter) {
    case 'memo':
      return memo
    case 'post':
      return post
    default:
      return [...memo, ...post]
  }
}

const getLanes = (width: number) => {
  if (width <= 640) return 1
  if (width <= 1024) return 2
  return 3
}

function ContentList() {
  const filter = useAtomValue(filterAtom)
  const contents = getContents(filter).sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  )

  const [ref, bounds] = useMeasure()
  const gap = 16 as const
  const lanes = getLanes(bounds.width)

  const windowVirtualizer = useWindowVirtualizer({
    count: contents.length,
    estimateSize: () => 300,
    overscan: 6,
    gap: gap,
    lanes: lanes,
  })

  const renderList = () =>
    windowVirtualizer.getVirtualItems().map((virtualRow) => {
      const content = contents[virtualRow.index]
      if (!content) return null
      return (
        <Link
          key={virtualRow.key}
          ref={windowVirtualizer.measureElement}
          data-index={virtualRow.index}
          href={`/blog/${content.slug}`}
          className="absolute top-0 will-change-transform"
          style={{
            left: `calc(${virtualRow.lane} * (100% / ${lanes}) + ${virtualRow.lane} * ${gap / lanes}px)`,
            width: `calc(100% / ${lanes} - ${((lanes - 1) * gap) / lanes}px)`,
            transform: `translateY(${virtualRow.start}px)`,
          }}
        >
          <ContentCard content={content} />
        </Link>
      )
    })

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        height: `${windowVirtualizer.getTotalSize()}px`,
      }}
    >
      {renderList()}
    </div>
  )
}

export { ContentList }

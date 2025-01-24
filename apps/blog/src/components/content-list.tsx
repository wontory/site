'use client'

import { useWindowVirtualizer } from '@tanstack/react-virtual'
import Link from 'next/link'

import { ContentCard } from '#components/content-card'
import type { Memo, Post } from '#site/content'

const LANES = 3 as const
const GAP = 16 as const

function ContentList({ contents }: { contents: (Memo | Post)[] }) {
  const windowVirtualizer = useWindowVirtualizer({
    count: contents.length,
    estimateSize: () => 300,
    overscan: 6,
    gap: GAP,
    lanes: LANES,
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
          href={`blog/${content.slug}`}
          className="absolute top-0 will-change-transform"
          style={{
            left: `calc(${virtualRow.lane} * (100% / ${LANES}) + ${virtualRow.lane} * ${GAP / LANES}px)`,
            width: `calc(100% / ${LANES} - ${((LANES - 1) * GAP) / LANES}px)`,
            transform: `translateY(${virtualRow.start}px)`,
          }}
        >
          <ContentCard content={content} />
        </Link>
      )
    })

  return (
    <div
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

'use client'

import { useVirtualizer } from '@tanstack/react-virtual'
import Link from 'next/link'
import { useRef } from 'react'

import { ContentCard } from '#components/content-card'
import type { Memo, Post } from '#site/content'

const LANES = 3 as const
const GAP = 16 as const

function ContentList({ contents }: { contents: (Memo | Post)[] }) {
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: contents.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
    overscan: 5,
    gap: GAP,
    lanes: LANES,
  })

  const renderList = () =>
    rowVirtualizer.getVirtualItems().map((virtualRow) => {
      const content = contents[virtualRow.index]
      if (!content) return null
      return (
        <Link
          key={virtualRow.key}
          ref={rowVirtualizer.measureElement}
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
    <div ref={parentRef}>
      <div
        className="relative"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {renderList()}
      </div>
    </div>
  )
}

export { ContentList }

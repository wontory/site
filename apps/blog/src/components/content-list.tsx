'use client'

import { useWindowVirtualizer } from '@tanstack/react-virtual'
import { useAtomValue } from 'jotai'
import { motion } from 'motion/react'
import Link from 'next/link'
import useMeasure from 'react-use-measure'

import { ContentCard } from '#components/content-card'
import { contentsAtom } from '#stores/contents-store'

const getLanes = (width: number) => {
  if (width <= 640) return 1
  if (width <= 1024) return 2
  return 3
}

function ContentList() {
  const contents = useAtomValue(contentsAtom)

  const [ref, bounds] = useMeasure()
  const isMeasured = bounds.width > 0

  const gap = 16 as const
  const lanes = getLanes(bounds.width)

  const windowVirtualizer = useWindowVirtualizer({
    count: contents?.length ?? 0,
    estimateSize: () => 300,
    gap: gap,
    lanes: lanes,
    overscan: lanes * 2,
  })

  const renderList = () =>
    windowVirtualizer.getVirtualItems().map((virtualRow) => {
      const content = contents?.[virtualRow.index] ?? null
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
    <motion.div
      ref={ref}
      className="relative"
      style={{ height: isMeasured ? windowVirtualizer.getTotalSize() : 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {isMeasured && renderList()}
    </motion.div>
  )
}

export { ContentList }

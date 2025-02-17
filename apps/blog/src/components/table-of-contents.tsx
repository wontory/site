'use client'

import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import useMeasure from 'react-use-measure'

import { ScrollArea } from '@package/ui/components/scroll-area'
import { cn } from '@package/utility/cn'

import { Gauge } from '#components/gauge'
import { useActiveItem } from '#hooks/use-active-item'
import { useMounted } from '#hooks/use-mounted'

interface TreeProps {
  tree: TocEntry[]
  level?: number
  activeItem?: string | null
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.length && level < 3 ? (
    <ul className={cn({ 'pl-4': level !== 1 })}>
      {tree.map((item) => (
        <li key={item.url}>
          <Link
            href={item.url}
            className={cn(
              'block w-full py-1 text-primary-foreground/60 text-sm transition-all',
              item.url === `#${activeItem}` &&
                'font-semibold text-primary-foreground',
            )}
          >
            {item.title}
          </Link>
          {item.items?.length ? (
            <Tree tree={item.items} level={level + 1} activeItem={activeItem} />
          ) : null}
        </li>
      ))}
    </ul>
  ) : null
}

export interface TocEntry {
  title: string
  url: string
  items: TocEntry[]
}

function TableOfContents({ toc }: { toc: TocEntry[] }) {
  const items = useMemo(
    () =>
      toc
        .reduce(
          (acc, item) => {
            acc.push({ url: item.url, title: item.title })
            if (item.items?.length) {
              acc.push(
                ...item.items.map((subItem) => ({
                  url: subItem.url,
                  title: subItem.title,
                })),
              )
            }
            return acc
          },
          [] as { url: string; title: string }[],
        )
        .map((item) => ({
          url: item.url.split('#')[1],
          title: item.title,
        })),
    [toc],
  )
  const itemIds = useMemo(() => items.map((item) => item.url), [items])

  const [ref, bounds] = useMeasure()
  const activeHeading = useActiveItem(itemIds)
  const mounted = useMounted()

  const [open, setOpen] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const updateScrollPercentage = () => {
      setScrollPercentage(
        Math.max(
          window.scrollY / (document.body.scrollHeight - window.innerHeight),
          0,
        ),
      )
    }

    window.addEventListener('scroll', updateScrollPercentage)
    updateScrollPercentage()

    return () => window.removeEventListener('scroll', updateScrollPercentage)
  }, [])

  return (
    mounted && (
      <MotionConfig transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}>
        <motion.div
          className="w-full max-w-80 overflow-hidden rounded-3xl bg-primary shadow-lg transition-colors"
          onClick={() => {
            setOpen((prev) => !prev)
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ height: bounds.height, opacity: 1, y: 0 }}
        >
          <div className="cursor-pointer" ref={ref}>
            <div className="flex cursor-pointer items-center gap-4 px-4 py-3">
              <div className="grow-0">
                <Gauge
                  value={scrollPercentage * 100}
                  className="size-6 text-[8px] text-primary-foreground"
                />
              </div>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={activeHeading}
                  className="line-clamp-1 font-bold text-primary-foreground transition-colors"
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                >
                  {items.find((item) => item.url === activeHeading)?.title ??
                    'Table of Contents'}
                </motion.span>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="popLayout">
              {open && (
                <motion.div
                  transition={{ duration: 0.1 }}
                  exit={{ opacity: 0 }}
                  layout
                >
                  <ScrollArea className="flex max-h-60 flex-col gap-2 px-4 pb-2">
                    <Tree tree={toc} activeItem={activeHeading} />
                  </ScrollArea>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    )
  )
}

export { TableOfContents }

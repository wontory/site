import { memo, post } from '#site/content'
import type { Content, Filter } from '#stores/contents-store'

const getContents = (filter?: Filter) => {
  switch (filter) {
    case 'post':
      return toSortedByDate(post)
    case 'memo':
      return toSortedByDate(memo)
    default:
      return toSortedByDate([...memo, ...post])
  }
}

const toSortedByDate = <T extends Content>(contents: T[]) => {
  const contents_copy = contents.slice()
  contents_copy.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  return contents_copy
}

const extract = <T extends Content>(
  arr: T[],
  keys: (keyof T)[],
): Partial<T>[] =>
  arr.map((obj) =>
    keys.reduce(
      (acc, key) => {
        if (key in obj) acc[key] = obj[key]
        return acc
      },
      {} as Partial<T>,
    ),
  )

export { getContents, toSortedByDate, extract }

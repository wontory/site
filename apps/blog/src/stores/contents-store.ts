'use client'

import { atom, createStore } from 'jotai'

import { type Memo, type Post, memo, post } from '#site/content'

export type Filter = 'all' | 'post' | 'memo' | undefined
export type SelectedFilter = 'all' | 'post' | 'memo'

const toSortedByDate = (contents: (Memo & Post)[]) => {
  const contents_copy = contents.slice()
  contents_copy.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  return contents_copy
}

const contentsStore = createStore()
const filterAtom = atom<Filter>()
const contentsAtom = atom<(Memo & Post)[]>()
contentsStore.set(filterAtom, undefined)
contentsStore.set(contentsAtom, toSortedByDate([...memo, ...post]))

const unsub = contentsStore.sub(filterAtom, () => {
  const filter = contentsStore.get(filterAtom)

  switch (filter) {
    case 'post':
      contentsStore.set(contentsAtom, toSortedByDate(post))
      break
    case 'memo':
      contentsStore.set(contentsAtom, toSortedByDate(memo))
      break
    default:
      contentsStore.set(contentsAtom, toSortedByDate([...memo, ...post]))
      break
  }
})

export { contentsStore, contentsAtom, filterAtom, unsub }

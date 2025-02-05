'use client'

import { atom, createStore } from 'jotai'

import { type Memo, type Post, memo, post } from '#site/content'

export type Filter = 'all' | 'post' | 'memo' | undefined
export type SelectedFilter = 'all' | 'post' | 'memo'

const contentsStore = createStore()
const filterAtom = atom<Filter>()
const contentsAtom = atom<(Memo & Post)[]>()
contentsStore.set(filterAtom, undefined)
contentsStore.set(contentsAtom, [...memo, ...post])

const unsub = contentsStore.sub(filterAtom, () => {
  const filter = contentsStore.get(filterAtom)
  let contents: (Memo & Post)[]

  switch (filter) {
    case 'post':
      contents = post
      break
    case 'memo':
      contents = memo
      break
    default:
      contents = [...memo, ...post]
  }

  contentsStore.set(
    contentsAtom,
    contents.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
  )
})

export { contentsStore, contentsAtom, filterAtom, unsub }

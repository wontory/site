'use client'

import { atom, createStore } from 'jotai'

import type { Memo, Post } from '#site/content'
import { getContents } from '#utils/contents'

export type Filter = 'all' | 'post' | 'memo' | undefined
export type SelectedFilter = 'all' | 'post' | 'memo'
export type Content = Memo & Post

const contentsStore = createStore()
const filterAtom = atom<Filter>()
const contentsAtom = atom<Content[]>()
contentsStore.set(filterAtom, undefined)
contentsStore.set(contentsAtom, getContents())

const unsub = contentsStore.sub(filterAtom, () => {
  const filter = contentsStore.get(filterAtom)
  contentsStore.set(contentsAtom, getContents(filter))
})

export { contentsStore, contentsAtom, filterAtom, unsub }

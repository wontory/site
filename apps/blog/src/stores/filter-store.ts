'use client'

import { atom, createStore } from 'jotai'

export type Filter = 'all' | 'post' | 'memo' | undefined
export type SelectedFilter = 'all' | 'post' | 'memo'

const filterStore = createStore()
const filterAtom = atom<Filter>()
filterStore.set(filterAtom, undefined)

export { filterStore, filterAtom }

'use client'

import { useAtom } from 'jotai'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@package/ui/components/select'
import { FilterIcon } from '@package/ui/icons/lucide'

import { type SelectedFilter, filterAtom } from '#stores/filter-store'

function ContentFilter() {
  const [filter, setFilter] = useAtom(filterAtom)

  const handleValueChange = (value: SelectedFilter) => {
    setFilter(value)
  }

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger defaultValue={filter} className="w-40">
        <FilterIcon className="size-4" />
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="memo">Memo</SelectItem>
        <SelectItem value="post">Post</SelectItem>
      </SelectContent>
    </Select>
  )
}

export { ContentFilter }

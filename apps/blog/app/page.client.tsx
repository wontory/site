'use client'

import { usePathname, useRouter } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@package/ui/components/select'
import { FilterIcon } from '@package/ui/icons/lucide'

function ContentFilter({ filter }: { filter: string | undefined }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleValueChange = (value: string) => {
    if (value === 'all') router.replace(pathname)
    else router.replace(`${pathname}?filter=${value}`)
  }

  return (
    <Select defaultValue={filter} onValueChange={handleValueChange}>
      <SelectTrigger className="w-40">
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

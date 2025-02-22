import type { NextRequest } from 'next/server'

import type { Filter } from '#stores/contents-store'
import type { ArrayElement } from '#types/array'
import { extract, getContents } from '#utils/contents'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const filter = (searchParams.get('filter') || 'all') as Filter
  const size = Number(searchParams.get('size')) || 3

  const contents = getContents(filter).slice(0, size)
  const keys: (keyof ArrayElement<typeof contents>)[] = [
    'slug',
    'title',
    'description',
    'date',
  ]

  return Response.json(extract(contents, keys))
}

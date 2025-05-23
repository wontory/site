import { readFileSync } from 'node:fs'

import { format } from 'date-fns'
import ky from 'ky'
import { NextResponse } from 'next/server'
import satori from 'satori'

import type { Content } from '#stores/contents-store'

const { BLOG_DOMAIN } = process.env

const [
  pretendard_regular,
  pretendard_medium,
  pretendard_semibold,
  pretendard_bold,
] = [
  readFileSync(`${process.cwd()}/public/fonts/pretendard-regular.otf`),
  readFileSync(`${process.cwd()}/public/fonts/pretendard-medium.otf`),
  readFileSync(`${process.cwd()}/public/fonts/pretendard-semibold.otf`),
  readFileSync(`${process.cwd()}/public/fonts/pretendard-bold.otf`),
]

export async function GET() {
  const contents = await ky
    .get<Pick<Content, 'slug' | 'title' | 'description' | 'date'>[]>(
      `${BLOG_DOMAIN}/api/contents`,
    )
    .json()

  const svg = await satori(
    <div tw="flex h-67 w-120 flex-col justify-between rounded-xl border border-gray-200 bg-white p-4">
      <div tw="flex items-center justify-between">
        <svg
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          clip-rule="evenodd"
          viewBox="0 0 160 93"
          width={40}
          role="img"
          aria-label="Wontory"
        >
          <path
            fill-rule="nonzero"
            d="M72.443 92.596c-1.271 0-2.973-.454-5.107-1.362-2.133-.908-4.312-2.111-6.536-3.608a45.105 45.105 0 0 1-6.332-5.175c-1.997-1.952-3.404-4.017-4.221-6.196-4.721 4.449-9.441 8.216-14.162 11.302-4.72 3.087-9.123 4.766-13.208 5.039-1.362 0-3.337-.59-5.924-1.77-2.587-1.181-5.129-2.701-7.625-4.562a33.59 33.59 0 0 1-6.537-6.4C.93 77.458 0 75.03 0 72.579c0-5.992.658-12.142 1.974-18.451a202.27 202.27 0 0 1 4.903-18.86 308.837 308.837 0 0 1 6.332-18.315A799.673 799.673 0 0 0 19.472 0a148.5 148.5 0 0 1 13.617 7.013 78.037 78.037 0 0 1 12.392 8.919c-1.362 2.723-2.769 5.946-4.221 9.668a283.1 283.1 0 0 0-4.222 11.574 346.053 346.053 0 0 0-3.881 12.12 347.706 347.706 0 0 0-3.2 11.302c-.907 3.449-1.634 6.491-2.178 9.123-.545 2.633-.817 4.494-.817 5.583 0 .726.159 1.385.476 1.975.318.59.84.885 1.566.885 1.362 0 2.883-.5 4.562-1.498 1.679-.999 3.45-2.315 5.311-3.949 1.861-1.634 3.767-3.518 5.719-5.651a143.97 143.97 0 0 0 5.787-6.741 110.583 110.583 0 0 1 2.86-14.297A248.679 248.679 0 0 1 57.464 32a324.327 324.327 0 0 1 4.902-13.685c1.725-4.494 3.404-8.919 5.038-13.277a148.5 148.5 0 0 1 13.617 7.013 78.037 78.037 0 0 1 12.392 8.919c-1.362 2.724-2.724 5.81-4.085 9.26a209.014 209.014 0 0 0-3.881 10.689 427.521 427.521 0 0 0-3.473 10.894 197.465 197.465 0 0 0-2.791 10.076c-.772 3.132-1.384 5.878-1.838 8.239-.454 2.36-.681 4.085-.681 5.174 0 .726.136 1.385.408 1.975.273.59.772.885 1.498.885 1.453 0 3.132-.522 5.039-1.566 1.906-1.044 3.88-2.451 5.923-4.222 2.042-1.77 4.108-3.835 6.196-6.195a164.962 164.962 0 0 0 6.127-7.353c-.817-2.815-1.225-6.037-1.225-9.669 0-2.905.499-6.422 1.498-10.553.998-4.13 2.269-8.238 3.812-12.323 1.544-4.085 3.246-7.875 5.107-11.37 1.861-3.495 3.608-6.105 5.242-7.83 2.088.726 4.244 1.793 6.468 3.2a58.546 58.546 0 0 1 6.196 4.493c1.907 1.589 3.473 3.155 4.698 4.698 1.226 1.544 1.929 2.769 2.111 3.677 0 1.997-.5 4.403-1.498 7.217-.999 2.814-2.383 5.855-4.153 9.123-1.771 3.268-3.859 6.673-6.264 10.213a176.438 176.438 0 0 1-7.83 10.621c1.634 1.998 4.403 2.996 8.306 2.996 4.539 0 9.078-1.611 13.617-4.834 4.539-3.223 9.759-7.557 15.66-13.004.908.817 1.997 1.884 3.268 3.2 1.271 1.316 2.315 2.474 3.132 3.472-7.626 7.535-14.457 13.004-20.494 16.409-6.036 3.404-11.915 5.106-17.634 5.106-5.446 0-9.94-1.498-13.481-4.494a140.653 140.653 0 0 1-9.191 8.92c-3.132 2.768-6.241 5.197-9.328 7.285-3.086 2.088-6.105 3.767-9.055 5.038-2.95 1.271-5.742 1.997-8.374 2.179Z"
          />
        </svg>
        <span tw="font-bold text-gray-800">Recent Contents</span>
      </div>
      <ul tw="flex flex-col">
        {contents.map((content) => (
          <li
            key={content.slug}
            tw="mt-3 flex flex-col rounded-xl bg-gray-100 px-4 py-2"
          >
            <div tw="flex items-center justify-between">
              <span tw="font-medium text-black text-sm">
                {content.title.length > 30
                  ? `${content.title.slice(0, 27)}...`
                  : content.title}
              </span>
              <span tw="text-gray-800 text-xs">
                {format(content.date, 'PPP')}
              </span>
            </div>
            <div tw="mt-1 flex text-gray-600 text-xs">
              <span>
                {content.description.length > 53
                  ? `${content.description.slice(0, 50)}...`
                  : content.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>,
    {
      width: 480,
      height: 270,
      fonts: [
        { name: 'Pretendard', data: pretendard_regular, weight: 400 },
        { name: 'Pretendard', data: pretendard_medium, weight: 500 },
        { name: 'Pretendard', data: pretendard_semibold, weight: 600 },
        { name: 'Pretendard', data: pretendard_bold, weight: 700 },
      ],
    },
  )

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}

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
          width="36.719"
          height="21.25"
          viewBox="0 0 36.719 21.25"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Logo"
        >
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke="#000"
            stroke-width="0.25mm"
            fill="#000"
          >
            <path
              d="M 16.625 21.25 Q 16.188 21.25 15.453 20.938 A 8.304 8.304 0 0 1 14.535 20.474 A 10.35 10.35 0 0 1 13.953 20.109 A 10.352 10.352 0 0 1 12.5 18.922 A 4.613 4.613 0 0 1 11.945 18.275 A 3.47 3.47 0 0 1 11.531 17.5 A 25.727 25.727 0 0 1 9.602 19.153 A 20.859 20.859 0 0 1 8.281 20.094 A 8.953 8.953 0 0 1 7.142 20.732 Q 6.151 21.19 5.25 21.25 Q 4.873 21.25 4.224 20.988 A 8.301 8.301 0 0 1 3.891 20.844 A 9.31 9.31 0 0 1 2.518 20.066 A 10.744 10.744 0 0 1 2.141 19.797 Q 1.281 19.156 0.641 18.328 A 3.475 3.475 0 0 1 0.241 17.685 Q 0.004 17.182 0 16.672 A 2.223 2.223 0 0 1 0 16.656 A 20.4 20.4 0 0 1 0.341 12.997 A 22.962 22.962 0 0 1 0.453 12.422 A 46.394 46.394 0 0 1 1.578 8.094 Q 2.25 5.938 3.031 3.891 A 199.523 199.523 0 0 0 3.781 1.895 A 168.469 168.469 0 0 0 4.469 0 Q 6.063 0.719 7.594 1.609 Q 9.125 2.5 10.438 3.656 Q 9.969 4.594 9.469 5.875 A 64.926 64.926 0 0 0 8.515 8.488 A 70.729 70.729 0 0 0 8.5 8.531 Q 8.031 9.906 7.609 11.313 A 90.692 90.692 0 0 0 7.215 12.664 A 69.399 69.399 0 0 0 6.875 13.906 A 53.012 53.012 0 0 0 6.658 14.757 Q 6.492 15.434 6.375 16 Q 6.188 16.906 6.188 17.281 A 0.986 0.986 0 0 0 6.232 17.582 A 0.889 0.889 0 0 0 6.297 17.734 A 0.378 0.378 0 0 0 6.424 17.876 Q 6.495 17.922 6.59 17.934 A 0.55 0.55 0 0 0 6.656 17.937 A 1.536 1.536 0 0 0 7.079 17.874 Q 7.263 17.821 7.461 17.725 A 3.319 3.319 0 0 0 7.703 17.594 A 6.885 6.885 0 0 0 8.259 17.223 Q 8.582 16.986 8.922 16.688 Q 9.563 16.125 10.234 15.391 Q 10.906 14.656 11.563 13.844 Q 11.781 12.188 12.219 10.563 A 57.205 57.205 0 0 1 13.188 7.344 Q 13.719 5.75 14.313 4.203 Q 14.906 2.656 15.469 1.156 Q 17.063 1.875 18.594 2.766 Q 20.125 3.656 21.438 4.813 Q 20.969 5.75 20.5 6.938 Q 20.031 8.125 19.609 9.391 Q 19.188 10.656 18.813 11.891 Q 18.438 13.125 18.172 14.203 A 49.855 49.855 0 0 0 17.988 14.974 Q 17.848 15.586 17.75 16.094 A 15.565 15.565 0 0 0 17.682 16.473 Q 17.623 16.827 17.603 17.07 A 2.69 2.69 0 0 0 17.594 17.281 A 1.151 1.151 0 0 0 17.626 17.56 A 0.98 0.98 0 0 0 17.688 17.734 A 0.34 0.34 0 0 0 17.797 17.871 Q 17.889 17.938 18.031 17.938 A 1.718 1.718 0 0 0 18.454 17.88 Q 18.645 17.832 18.853 17.742 A 3.952 3.952 0 0 0 19.188 17.578 A 6.7 6.7 0 0 0 19.855 17.156 Q 20.195 16.914 20.547 16.609 A 13.878 13.878 0 0 0 21.387 15.814 A 17.47 17.47 0 0 0 21.969 15.188 Q 22.688 14.375 23.375 13.5 A 6.786 6.786 0 0 1 23.164 12.461 Q 23.094 11.906 23.094 11.281 Q 23.094 10.281 23.438 8.859 Q 23.781 7.438 24.313 6.031 A 23.311 23.311 0 0 1 25.133 4.115 A 20.141 20.141 0 0 1 25.484 3.422 Q 26.103 2.26 26.649 1.666 A 3.809 3.809 0 0 1 26.688 1.625 A 6.469 6.469 0 0 1 27.511 1.98 A 8.425 8.425 0 0 1 28.172 2.359 Q 28.938 2.844 29.594 3.391 A 9.023 9.023 0 0 1 30.157 3.9 Q 30.448 4.187 30.672 4.469 Q 31 4.882 31.11 5.162 A 0.885 0.885 0 0 1 31.156 5.313 A 3.472 3.472 0 0 1 31.108 5.868 Q 31.027 6.363 30.813 6.969 Q 30.474 7.922 29.878 9.027 A 20.459 20.459 0 0 1 29.859 9.063 Q 29.25 10.188 28.422 11.406 A 40.409 40.409 0 0 1 26.685 13.768 A 43.834 43.834 0 0 1 26.625 13.844 A 1.672 1.672 0 0 0 27.324 14.337 Q 27.602 14.446 27.949 14.494 A 4.284 4.284 0 0 0 28.531 14.531 A 4.762 4.762 0 0 0 30.436 14.119 A 6.736 6.736 0 0 0 31.656 13.422 Q 32.73 12.659 34.026 11.535 A 53.747 53.747 0 0 0 35.25 10.438 Q 35.563 10.719 36 11.172 A 18.323 18.323 0 0 1 36.306 11.496 Q 36.454 11.657 36.578 11.802 A 8.799 8.799 0 0 1 36.719 11.969 A 36.234 36.234 0 0 1 35.132 13.451 Q 34.288 14.19 33.509 14.761 A 15.058 15.058 0 0 1 32.016 15.734 A 9.878 9.878 0 0 1 30.218 16.535 A 7.256 7.256 0 0 1 27.969 16.906 A 5.601 5.601 0 0 1 26.554 16.736 A 4.201 4.201 0 0 1 24.875 15.875 Q 23.844 16.969 22.766 17.922 A 22.483 22.483 0 0 1 21.424 19.022 A 18.921 18.921 0 0 1 20.625 19.594 A 14.002 14.002 0 0 1 19.445 20.313 A 11.202 11.202 0 0 1 18.547 20.75 Q 17.531 21.188 16.625 21.25 Z"
              vector-effect="non-scaling-stroke"
            />
          </g>
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

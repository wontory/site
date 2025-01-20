import Link from 'next/link'

import { PostCard } from '#components/post-card'
import { post } from '#site/content'

export default function Home() {
  const contents = post.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {contents.map((content) => (
        <Link key={content.slug} href={`/blog/${content.slug}`}>
          <PostCard content={content} />
        </Link>
      ))}
    </div>
  )
}

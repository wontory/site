import { ContentList } from '#components/content-list'
import { post } from '#site/content'

export default function Home() {
  const contents = post.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return <ContentList contents={contents} />
}

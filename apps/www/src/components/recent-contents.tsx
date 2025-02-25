import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@package/ui/components/card'
import ky from 'ky'

const { BLOG_DOMAIN } = process.env

export type Filter = 'all' | 'post' | 'memo' | undefined
export type Content = { slug: string; title: string; description: string }

async function RecentContents({
  filter,
  size,
}: { filter?: Filter; size?: number }) {
  const contents = await ky
    .get<Content[]>(`${BLOG_DOMAIN}/api/contents?filter=${filter}&size=${size}`)
    .json()

  return (
    <ol className="flex flex-col gap-2">
      {contents.map((content) => (
        <li key={content.slug}>
          <a href={`/blog/${content.slug}`}>
            <Card className="shadow-xs transition-colors hover:bg-primary/5">
              <CardHeader className="pb-3">
                <CardTitle>
                  <h3>{content.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <p className="line-clamp-2 text-muted-foreground transition-colors">
                    {content.description}
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </a>
        </li>
      ))}
    </ol>
  )
}

export { RecentContents }

import { HeroScene } from '#components/hero-scene'
import { RecentContents } from '#components/recent-contents'

export default function Home() {
  return (
    <>
      <section className="relative aspect-video overflow-hidden rounded-3xl">
        <HeroScene />
      </section>
      <section className="grid gap-8 xl:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Recent Posts</h2>
          <RecentContents filter="post" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Recent Memos</h2>
          <RecentContents filter="memo" />
        </div>
      </section>
    </>
  )
}

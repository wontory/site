'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

function GiscusComment() {
  const { resolvedTheme } = useTheme()

  const resolvedGiscusTheme =
    resolvedTheme === 'dark' ? 'noborder_dark' : 'noborder_light'

  return (
    <Giscus
      repo="wontory/wontory.dev-comments"
      repoId="R_kgDOK8hnMw"
      category="General"
      categoryId="DIC_kwDOK8hnM84Cb64A"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedGiscusTheme}
      lang="en"
      loading="lazy"
    />
  )
}

export { GiscusComment }

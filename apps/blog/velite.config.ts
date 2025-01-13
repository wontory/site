import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import rehypeExpressiveCode, {
  type RehypeExpressiveCodeOptions,
} from 'rehype-expressive-code'
import { defineCollection, defineConfig, s } from 'velite'

const rehypeExpressiveCodeOptions: RehypeExpressiveCodeOptions = {
  themes: ['min-dark', 'min-light'],
  themeCssSelector: (theme) => `.${theme.type}`,
  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
}

const slugify = (slug: string) => slug.split('/').slice(1).join('/')

const calculateReadingTime = (wordCount: number) => ({
  readingTime: Math.round(wordCount / 120),
})

const memo = defineCollection({
  name: 'Memo',
  pattern: 'memo/**/*.mdx',
  schema: s
    .object({
      metadata: s.metadata(),
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      draft: s.boolean().default(false),
      content: s.mdx(),
      toc: s.toc(),
    })
    .transform((data) => ({
      ...data,
      metadata: calculateReadingTime(data.metadata.wordCount),
      slug: slugify(data.slug),
    })),
})

const post = defineCollection({
  name: 'Post',
  pattern: 'post/**/*.mdx',
  schema: s
    .object({
      metadata: s.metadata(),
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      draft: s.boolean().default(false),
      content: s.mdx(),
      toc: s.toc(),
    })
    .transform((data) => ({
      ...data,
      metadata: calculateReadingTime(data.metadata.wordCount),
      slug: slugify(data.slug),
    })),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { memo, post },
  mdx: {
    rehypePlugins: [[rehypeExpressiveCode, rehypeExpressiveCodeOptions]],
    remarkPlugins: [],
  },
})

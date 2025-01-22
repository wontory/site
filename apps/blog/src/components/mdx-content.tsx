import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'

import { cn } from '@package/utility/cn'

const sharedComponents: MDXComponents = {
  img: ({ className, alt, ...props }) => (
    <Image
      className={cn('mx-auto rounded-md border', className)}
      alt={alt}
      {...props}
    />
  ),
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} />
}

export { MDXContent }

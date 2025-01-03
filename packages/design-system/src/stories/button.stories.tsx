import type { Meta, StoryObj } from '@storybook/react'
import { HeartIcon } from 'lucide-react'

import { Button } from '../components/button.js'

const meta: Meta<typeof Button> = { component: Button }

export default meta

type Story = StoryObj<typeof Button>

const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
}

const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Button',
  },
}

const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Button',
  },
}

const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Button',
  },
}

const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Button',
  },
}

const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Button',
  },
}

const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Button',
  },
}

const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Button',
  },
}

const Icon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    children: <HeartIcon />,
  },
}

export {
  Primary,
  Secondary,
  Destructive,
  Outline,
  Ghost,
  Link,
  Large,
  Small,
  Icon,
}

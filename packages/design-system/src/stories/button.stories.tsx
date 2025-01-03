import type { Meta, StoryObj } from '@storybook/react'
import { HeartIcon } from 'lucide-react'

import { Button } from '../components/button.js'

const meta: Meta<typeof Button> = {
  component: Button,
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Button',
  },
}

export const Icon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    children: <HeartIcon />,
  },
}

export default meta

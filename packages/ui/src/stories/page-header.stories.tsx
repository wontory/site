import type { Meta, StoryObj } from '@storybook/react'

import { PageHeader } from '#components/page-header'

const meta: Meta<typeof PageHeader> = { component: PageHeader }

export default meta

type Story = StoryObj<typeof PageHeader>

const Primary: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    children: 'Children',
  },
}

export { Primary }

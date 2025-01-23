import type { Meta, StoryObj } from '@storybook/react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#components/select'

const meta: Meta<typeof Select> = { component: Select }

export default meta

type Story = StoryObj<typeof Select>

const Primary: Story = {
  args: {
    children: (
      <>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </>
    ),
  },
}

export { Primary }

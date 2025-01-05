import { dirname, join, resolve } from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'

const getAbsolutePath = (value: string): string =>
  dirname(require.resolve(join(value, 'package.json')))

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite')

    return mergeConfig(config, {
      resolve: {
        alias: [{ find: '~', replacement: resolve(__dirname, '../src') }],
      },
    })
  },
}

export default config

import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};

    // Add json, svg extension
    config.resolve.extensions = config.resolve.extensions
      ? [...config.resolve.extensions, '.json', '.svg']
      : ['.json', '.svg'];

    // Add alias for iconDist directory
    config.resolve.alias = {
      '@/assets': path.resolve(__dirname, '../src/assets/'),
      '@/components': path.resolve(
        __dirname,
        '../src/components/',
      ),
      '@/pages': path.resolve(__dirname, '../src/pages/'),
      '@/store': path.resolve(__dirname, '../src/store/'),
      '@/styles': path.resolve(__dirname, '../src/styles/'),
      '@/utils': path.resolve(__dirname, '../src/utils/'),
    };

    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];

    config.module.rules = [
      ...config.module.rules.map((rule) => {
        if (!rule || rule === '...') {
          return rule;
        }

        if (rule.test && /svg/.test(String(rule.test))) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      }),
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ];

    return config;
  },
};

export default config;

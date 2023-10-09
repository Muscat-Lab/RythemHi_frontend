import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyles from '../src/styles/GlobalStyles';

export const parameters = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '../src/styles/GlobalStyles';
import Layout from '../src/components/common/templates/Layout';

const queryClient = new QueryClient();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Layout>
        <Story />
      </Layout>
    </QueryClientProvider>
  ),
];
import { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import Layout from '@/components/common/templates/Layout';

import GlobalStyles from '../styles/GlobalStyles';

const queryClient = new QueryClient();

export default function Home({
  Component,
  pageProps,
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

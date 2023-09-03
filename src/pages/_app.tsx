import { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import GlobalStyles from '../styles/GlobalStyles';

const queryClient = new QueryClient();

export default function Home({
  Component,
  pageProps,
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

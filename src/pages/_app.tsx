import type { AppProps } from 'next/app'

import { GlobalStyles } from '@styles/global';
import { NProgress } from '@components/NProgress';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles/>
      <NProgress />
      <Component {...pageProps} />
    </>
  );
}

export default App

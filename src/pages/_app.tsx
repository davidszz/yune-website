import type { AppProps } from 'next/app'

import { GlobalStyles } from '@styles/global';
import { NProgress } from '@components/NProgress';
import { ModalProvider } from '@contexts/ModalContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <GlobalStyles/>
      <NProgress />
      <Component {...pageProps} />
    </ModalProvider>
  );
}

export default App

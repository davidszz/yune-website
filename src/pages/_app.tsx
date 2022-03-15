import type { AppProps } from 'next/app'

import { AuthProvider } from '@contexts/AuthContext';

import { NProgress } from '@components/NProgress';

import { GlobalStyles } from '@styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <GlobalStyles/>
        <AuthProvider>
          <NProgress />
          <Component {...pageProps} />
        </AuthProvider>
    </>
  );
}

export default App

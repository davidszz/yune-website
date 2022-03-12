import type { AppProps } from 'next/app'

import { GlobalStyles } from '@styles/global';
import { NProgress } from '@components/NProgress';
import { AuthProvider } from '@contexts/AuthContext';

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

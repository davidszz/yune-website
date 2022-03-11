import type { AppProps } from 'next/app'

import { GlobalStyles } from '@styles/global';
import { NProgress } from '@components/NProgress';
import { AuthProvider } from '@contexts/AuthContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalStyles/>
      <NProgress />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default App

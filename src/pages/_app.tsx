import type { AppProps } from 'next/app';

import { AuthProvider } from '@contexts/AuthContext';

import { NProgress } from '@components/NProgress';
import { Tooltip } from '@components/ui/Tooltip';

import { GlobalStyles } from '@styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <NProgress />
        <Component {...pageProps} />
        <Tooltip />
      </AuthProvider>
    </>
  );
}

export default App;

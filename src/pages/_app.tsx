import { darkTheme } from '@styles/themes/dark';
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@styles/global';
import { Head } from '@components/Head';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

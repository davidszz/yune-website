import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@styles/global';
import { lightTheme } from '@styles/themes/light';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;

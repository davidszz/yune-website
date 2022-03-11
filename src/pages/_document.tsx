import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const renderPage = context.renderPage;

    try {
      context.renderPage = () =>
        renderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;500;700&family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yunestore.xyz" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Yune Store" />
          <meta
            property="og:keywords"
            content="Discord,Yune,Yune Store,Yune Bots,Discord Bot,Bots Discord,Bot de ranqueada, Bot de apostado"
          />
          <meta property="og:title" content="Yune Store | Os melhores bots ranqueado e apostado para seu servidor!" />
          <meta
            property="og:description"
            content="Yune é uma loja de bots para o Discord que oferece o melhor e mais moderno bot de ranqueada e apostado do mercado."
          />
          <meta name="theme-color" content="#0084FF" />
          <meta data-react-helmet="true" charSet="utf-8" />
          <meta data-react-helmet="true" property="og:image" content="/assets/adversiment.png" />
          <meta data-react-helmet="true" property="twitter:image" content="/assets/adversiment.png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
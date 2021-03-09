import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet } from 'styled-components';
import theme from "../styles/theme";


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const materialSheets = new ServerStyleSheets();
    const styledComponentsSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => materialSheets.collect(<App {...props} />),
        });
  
      const initialProps = await Document.getInitialProps(ctx);
  
      return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), materialSheets.getStyleElement()],
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
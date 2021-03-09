import React, { useEffect } from 'react';
import NextApp, { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { ThemeProvider } from "@material-ui/styles";
import uiTheme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
  }, []);
  
  return (
    <>
      <Head>

      </Head>
      <ThemeProvider theme={uiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

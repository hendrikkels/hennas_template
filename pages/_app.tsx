import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from '../theme';
import { useThemeDetector } from '../hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const isDarkTheme = useThemeDetector();

  const [theme, setTheme] = useState({ ...base, colors: light });

  useEffect(() => {
    if (isDarkTheme) {
      setTheme({ ...base, colors: dark });
    } else {
      setTheme({ ...base, colors: light });
    }
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Hennas</title>
      </Head>
      <main className="main">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;

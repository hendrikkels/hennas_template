import React, { useEffect, useState } from 'react';
import '../../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from '../../theme';
import { useThemeDetector } from '../hooks';
import { refreshToken } from '@/utils/auth';
import { useStore } from '@/store';

function MyApp({ Component, pageProps }: AppProps) {
  const isDarkTheme = useThemeDetector();
  const store = useStore();

  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState({ ...base, colors: light });

  useEffect(() => {
    if (isDarkTheme) {
      setTheme({ ...base, colors: dark });
    } else {
      setTheme({ ...base, colors: light });
    }
  }, [isDarkTheme]);

  useEffect(() => {
    //initial funciton
    refreshToken().then((data) => {
      if (data.ok) {
        store.setAccessToken(data.accessToken);
        store.setUser(data.user);
        console.log(useStore.getState().accessToken);
      }
      setLoading(false);
    });

    //starts silent refreshes
    setInterval(() => {
      refreshToken().then((data) => {
        if (data.ok) {
          store.setAccessToken(data.accessToken);
          store.setUser(data.user);
        }
      });
    }, 600000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Hennas</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;

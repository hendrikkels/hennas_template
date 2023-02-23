import React, { useEffect, useState } from 'react';
import '../../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from '../../theme';
import { useThemeDetector } from '../hooks';
import { refreshToken } from '@/utils/jwt';
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

  //This refreshes the access token on a page refresh, this can probably be removed later on
  useEffect(() => {
    //initial funciton
    setLoading(true);
    refreshToken().then((res) => {
      console.log('in the then');
      if (res.status == 200 && res.data.accessToken && res.data.user) {
        store.setAccessToken(res.data.accessToken);
        store.setUser(res.data.user);
      }
      setLoading(false);
    });

    //starts silent refreshes
    setInterval(() => {
      refreshToken().then((res) => {
        if (res.status == 200 && res.data.accessToken && res.data.user) {
          store.setAccessToken(res.data.accessToken);
          store.setUser(res.data.user);
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

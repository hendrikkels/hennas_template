import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { base, light, dark } from '../theme';
import { useThemeDetector } from '../hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const isDarkTheme = useThemeDetector();

  let theme = { ...base, colors: light };

  if (isDarkTheme) {
    theme = { ...base, colors: dark };
  }

  return (
    <ThemeProvider
      theme={
        isDarkTheme ? { ...base, colors: dark } : { ...base, colors: light }
      }
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );

  // return <Component {...pageProps} />;
}

export default MyApp

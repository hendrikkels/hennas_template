import { useEffect, useState } from 'react';

export const useThemeDetector = () => {
  const getCurrentTheme = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      return false;
    }
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const mqListener = (e: any) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      darkThemeMq.addEventListener('change', () => {});

      try {
        // Chrome & Firefox
        darkThemeMq.addEventListener('change', mqListener);
      } catch (e1) {
        try {
          // Safari
          darkThemeMq.addListener(mqListener);
          return () => darkThemeMq.removeListener(mqListener);
        } catch (e2) {
          console.error(e2);
        }
      }
    }
  }, []);
  return isDarkTheme;
};

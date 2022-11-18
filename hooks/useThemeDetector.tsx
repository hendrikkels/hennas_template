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
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }
  }, []);
  return isDarkTheme;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      success: string;
      error: string;
      info: string;
      warning: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      blue: string;
      purple: string;
      pink: string;
      gray: string;
      white: string;
      black: string;
      primaryBackground: string;
      secondaryBackground: string;
      navbarBackground: string;
    };
  }
}

export const base = {
  borderRadius: '4px',
};

export const light = {
  primary: '#5677fc',
  secondary: '#00c375',
  tertiary: '#f49e4c',
  success: '#00c375',
  error: '#ff5a5a',
  info: '#00cecb',
  warning: '#f49e4c',
  red: '#ff5a5a',
  orange: '#f49e4c',
  yellow: '#ffee6b',
  green: '#23d18c',
  blue: '#5677fc',
  purple: '#a29bfe',
  pink: '#ff5d8f',
  gray: '#cccccc',
  white: '#ffffff',
  black: '#000000',
  primaryBackground: '#ffffff',
  secondaryBackground: '#eeeeee',
  navbarBackground: '#e1e1e1',
};

export const dark = {
  primary: '#5677fc',
  secondary: '#23d18c',
  tertiary: '#f49e4c',
  success: '#00c375',
  error: '#ff5a5a',
  info: '#00cecb',
  warning: '#f49e4c',
  red: '#ff5a5a',
  orange: '#f49e4c',
  yellow: '#ffee6b',
  green: '#23d18c',
  blue: '#5677fc',
  purple: '#a29bfe',
  pink: '#ff5d8f',
  gray: '#cccccc',
  white: '#ffffff',
  black: '#000000',
  primaryBackground: '#000000',
  secondaryBackground: '#111111',
  navbarBackground: '#1a1a1a',
};

export const clear = {
  primary: '#00000000',
  secondary: '#00000000',
  tertiary: '#00000000',
  success: '#00000000',
  error: '#00000000',
  info: '#00000000',
  warning: '#00000000',
  red: '#00000000',
  orange: '#00000000',
  yellow: '#00000000',
  green: '#00000000',
  blue: '#00000000',
  purple: '#00000000',
  pink: '#00000000',
  gray: '#00000000',
  white: '#00000000',
  black: '#00000000',
  primaryBackground: '#00000000',
  secondaryBackground: '#00000000',
  navbarBackground: '#00000000',
};

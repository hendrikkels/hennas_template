declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      tertiiary: string;
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
  purple: '#9927c3',
  pink: '#ff5d8f',
  gray: '#eeeeee',
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
  purple: '#9927c3',
  pink: '#ff5d8f',
  gray: '#a5a5a5',
  white: '#ffffff',
  black: '#000000',
  primaryBackground: '#000000',
  secondaryBackground: '#444444',
  navbarBackground: '#1a1a1a',
};

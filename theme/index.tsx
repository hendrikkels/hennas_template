declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    fontFamily: string;
    inputHeight: string;
    inputPaddingX: string;
    inputPaddingY: string;
    inputBorderWidth: string;
    inputBorderRadius: string;
    inputLabelFontSize: string;
    inputLabelFontFamily: string;
    inputLabelHeight: string;
    inputLabelPaddingLeft: string;
    inputErrorFontSize: string;
    inputErrorFontFamily: string;
    inputErrorHeight: string;
    inputErrorPaddingLeft: string;
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
      inputBackground: string;
      inputBorder: string;
      inputCaret: string;
      inputLabel: string;
      inputError: string;
    };
  }
}

export const base = {
  borderRadius: '4px',
  inputHeight: '42px',
  inputPaddingX: '8px',
  inputPaddingY: '2px',
  inputBorderWidth: '2px',
  inputBorderRadius: '4px',
  inputLabelFontSize: '14px',
  inputLabelFontFamily: '',
  inputLabelHeight: '20px',
  inputLabelPaddingLeft: '2px',
  inputErrorFontSize: '10px',
  inputErrorFontFamily: '',
  inputErrorHeight: '18px',
  inputErrorPaddingLeft: '4px',
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
  gray: '#888888',
  white: '#ffffff',
  black: '#000000',
  primaryBackground: '#ffffff',
  secondaryBackground: '#eeeeee',
  navbarBackground: '#e1e1e1',
  inputBackground: '#dddddd',
  inputBorder: '#dddddd',
  inputCaret: '#5677fc',
  inputLabel: '#888888',
  inputError: '#ff5a5a',
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
  inputBackground: '#cccccc',
  inputBorder: '#cccccc',
  inputCaret: '#5677fc',
  inputLabel: '#cccccc',
  inputError: '#ff5a5a',
};

export const clear = {};

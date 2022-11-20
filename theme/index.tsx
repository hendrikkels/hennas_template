declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    borderRadius: string;
    cardPadding: string;
    inputHeight: string;
    inputPaddingX: string;
    inputPaddingY: string;
    inputBorderWidth: string;
    inputBorderRadius: string;
    inputValueFontSize: string;
    inputValueFontFamily: string;
    inputLabelFontSize: string;
    inputLabelFontFamily: string;
    inputLabelHeight: string;
    inputLabelPaddingLeft: string;
    inputErrorFontSize: string;
    inputErrorFontFamily: string;
    inputErrorHeight: string;
    inputErrorPaddingLeft: string;
    buttonHeight: string;
    buttonPaddingX: string;
    buttonPaddingY: string;
    buttonBorderWidth: string;
    buttonBorderRadius: string;
    buttonLabelFontSize: string;
    buttonLabelFontFamily: string;
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
      inputText: string;
      inputTextDisabled: string;
      inputBackground: string;
      inputBorder: string;
      inputLabel: string;
      inputError: string;
      buttonForeground: string;
      buttonBackground: string;
      buttonBorder: string;
      buttonHoverMask: string;
      buttonPressMask: string;
    };
  }
}

export const base = {
  fontFamily: 'JetBrains Mono',
  borderRadius: '4px',
  cardPadding: '40px',
  inputHeight: '42px',
  inputPaddingX: '8px',
  inputPaddingY: '2px',
  inputBorderWidth: '0px',
  inputBorderRadius: '4px',
  inputValueFontSize: '20px',
  inputValueFontFamily: '',
  inputLabelFontSize: '14px',
  inputLabelFontFamily: '',
  inputLabelHeight: '20px',
  inputLabelPaddingLeft: '2px',
  inputErrorFontSize: '10px',
  inputErrorFontFamily: '',
  inputErrorHeight: '18px',
  inputErrorPaddingLeft: '4px',
  buttonHeight: '42px',
  buttonPaddingX: '20px',
  buttonPaddingY: '0px',
  buttonBorderWidth: '0px',
  buttonBorderRadius: '4px',
  buttonLabelFontSize: '20px',
  buttonLabelFontFamily: '',
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
  secondaryBackground: '#f8f8f8',
  navbarBackground: '#e1e1e1',
  inputText: '#000000',
  inputTextDisabled: '#757575',
  inputBackground: '#eeeeee',
  inputBorder: '#5677fc',
  inputLabel: '#888888',
  inputError: '#ff5a5a',
  buttonForeground: '#ffffff',
  buttonBackground: '#5677fc',
  buttonBorder: '#5677fc',
  buttonHoverMask: '#0000000e',
  buttonPressMask: '#0000000e',
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
  inputText: '#ffffff',
  inputTextDisabled: '#757575',
  inputBackground: '#222222',
  inputBorder: '#222222',
  inputLabel: '#cccccc',
  inputError: '#ff5a5a',
  buttonForeground: '#ffffff',
  buttonBackground: '#5677fc',
  buttonBorder: '#5677fc',
  buttonHoverMask: '#ffffff0e',
  buttonPressMask: '#ffffff0e',
};

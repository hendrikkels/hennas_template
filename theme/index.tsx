declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    fontSize: string;
    borderRadius: string;
    cardPadding: string;
    navbarHeight: string;
    navbarPaddingX: string;
    navbarItemFontSize: string;
    navbarItemFontFamily: string;
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
    buttonLabelLineHeight: string;
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
      navbarItemActive: string;
      navbarItemInactive: string;
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
  fontSize: '14px',
  lineHeight: '1.75',
  borderRadius: '6px',
  cardPadding: '40px',
  navbarHeight: '82px',
  navbarPaddingX: '42px',
  navbarItemFontSize: '18px',
  navbarItemFontFamily: 'JetBrains Mono',
  inputHeight: '42px',
  inputPaddingX: '8px',
  inputPaddingY: '2px',
  inputBorderWidth: '0px',
  inputBorderRadius: '4px',
  inputValueFontSize: '20px',
  inputValueFontFamily: 'JetBrains Mono',
  inputLabelFontSize: '14px',
  inputLabelFontFamily: '',
  inputLabelHeight: '20px',
  inputLabelPaddingLeft: '2px',
  inputErrorFontSize: '10px',
  inputErrorFontFamily: 'JetBrains Mono',
  inputErrorHeight: '18px',
  inputErrorPaddingLeft: '4px',
  buttonHeight: '48px',
  buttonPaddingX: '16px',
  buttonPaddingY: '0px',
  buttonBorderWidth: '0px',
  buttonBorderRadius: '6px',
  buttonLabelFontSize: '16px',
  buttonLabelLineHeight: '1.75',
  buttonLabelFontFamily: 'JetBrains Mono',
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
  navbarItemActive: '#5677fc',
  navbarItemInactive: '#000000',
  inputText: '#000000',
  inputTextDisabled: '#757575',
  inputBackground: '#0000000d',
  inputBorder: '#0000000d',
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
  navbarItemActive: '#5677fc',
  navbarItemInactive: '#ffffff',
  inputText: '#ffffff',
  inputTextDisabled: '#757575',
  inputBackground: '#ffffff40',
  inputBorder: '#ffffff40',
  inputLabel: '#cccccc',
  inputError: '#ff5a5a',
  buttonForeground: '#ffffff',
  buttonBackground: '#5677fc',
  buttonBorder: '#5677fc',
  buttonHoverMask: '#ffffff20',
  buttonPressMask: '#ffffff20',
};

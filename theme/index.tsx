declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      secondary: string;
      primaryAccent: string;
      secondaryAccent: string;
      navbarBackground: string;
    };
  }
}

export const base = {
  borderRadius: '10px',
};

export const light = {
  primary: '#e1e1e1',
  secondary: '#bdbdbd',
  primaryAccent: '#5677fc',
  secondaryAccent: '#3ba476',
  navbarBackground: '#e1e1e1',
};

export const dark = {
  primary: '#1a1a1a',
  secondary: '#2a2a2a',
  primaryAccent: '#5677fc',
  secondaryAccent: '#3ba476',
  navbarBackground: '#1a1a1a',
};

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: null,
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#f8f8f8',
      light: '#66B2FF',
      dark: '#0059B2',
      contrastText: '#616162',
    },
    common: {
      black: '#1D1D1D',
      white: '#fff',
    },
    text: {
      primary: '#1D1D1F',
      secondary: '#909091',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'sans-serif',

    fontWeightRegular: 500,
    fontSize: 16,
    h1: {
      fontSize: '3.125rem',
      fontWeight: 700,
      lineHeight: 1.188,
    },
    h2: {
      fontSize: '2.3125rem',
      fontWeight: 700,
      lineHeight: 1.189,
    },
    h3: {
      fontSize: '1.75rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.3125rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.125rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 24,
      lineHeight: 1.3,
      letterSpacing: 0,
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 400,
    },
    caption: {
      display: 'inline-block',
      fontSize: '0.95rem',
      lineHeight: 1.5,
      letterSpacing: 0,
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      textTransform: 'uppercase',
    },
  },
});

export default theme;

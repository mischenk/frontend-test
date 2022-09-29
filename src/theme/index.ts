import { createTheme } from '@mui/material';

export const systemColors = {
  primary: {
    main: '#21B6A8',
    light: '#65E9D9',
    dark: '#3D8479',
    contrastText: '#ffffff',
  },
  grey: {
    50: '#F6F8FB',
    100: '#F2F2F5',
    200: '#EFEFEF',
    300: '#D8DDE2',
    400: '#B2BBC6',
    500: '#8C94A5',
    600: '#797C83',
    700: '#585C66',
    900: '#001241',
  },
  common: {
    white: '#fff',
    black: '#000'
  }
};

export const shadows: any = [
  "none",
  "0px 1px 3px rgba(109, 111, 113, 0.20)",
  "0px 5px 8px rgba(109, 111, 113, 0.18)",
  "0px 10px 15px rgba(109, 111, 113, 0.14)",
  "0px 16px 20px rgba(109, 111, 113, 0.13)",
  `0px 0px 0px 2px ${systemColors.primary.light}`,
  "0px 24px 30px rgba(109, 111, 113, 0.12)",
  "0px 28px 36px rgba(109, 111, 113, 0.12)",
  "0px 28px 40px rgba(109, 111, 113, 0.12)",
  "0px 28px 45px rgba(109, 111, 113, 0.12)",
  "0px 15px 20px rgba(16, 99, 254, 0.2)",
  "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

export const theme = createTheme({
  palette: systemColors,
  typography: {
    body1: {
      fontSize: "0.875rem",
      color: systemColors.common.black
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {

        }
      }
    },
  },
  shadows: shadows
});

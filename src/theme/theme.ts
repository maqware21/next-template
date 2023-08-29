import { createTheme } from '@mui/material/styles';
import {
  primaryMain,
  secondaryMain,
  secondaryLight,
  primaryText,
  secondaryText,
  dividerClr,
} from './GlobalVariables';
export const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
      light: secondaryLight,
    },
    text: {
      primary: primaryText,
      secondary: secondaryText,
    },
    divider: dividerClr,
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h3: {
      fontFamily: 'Inter',
      fontSize: '40px',
      lineHeight: '50px',
    },
    h6: {
      fontFamily: 'Inter',
      fontWeight: 600,
      lineHeight: '24px',
      fontSize: '17px',
    },
    h5: {
      fontFamily: 'Inter',
      fontWeight: 600,
      lineHeight: '30px',
      fontSize: '21px',
      color: '#222128;',
    },
    subtitle1: {
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: 13,
      lineHeight: '20px',
    },
    subtitle2: {
      fontFamily: 'Inter',
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '20px',
    },
    body1: {
      fontFamily: 'Inter',
      fontSize: '15px',
      lineHeight: '24px',
      color: 'secondary',
    },
    body2: {
      fontFamily: 'Inter',
      fontSize: '17px',
      lineHeight: '28px',
      color: '#6F6D73',
    },
    button: {
      fontFamily: 'Inter',
      fontWeight: 500,
    },
  },
});

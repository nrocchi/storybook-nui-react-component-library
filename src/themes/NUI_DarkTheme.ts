import {createTheme, darken, lighten, responsiveFontSizes} from '@mui/material'
import {
  blue,
  green,
  grey,
  lightBlue,
  orange,
  pink,
  red,
} from '@mui/material/colors'
import '@fontsource/inter'
import '@fontsource/open-sans'
import '@fontsource/montserrat'
import '@fontsource/roboto'
import {Colors} from './ThemeTypes'

/************ MATCHING COLORS FOR LIGHT AND DARK THEMES ************/
// 1. SAME COLORS LIGHT AND DARK THEMES
// lighter: colors.primary ? lighten(colors.primary, 0.4) : blue[100],
// light: colors.primary ? lighten(colors.primary, 0.3) : blue[200],
// main: colors.primary || blue[500],
// dark: colors.primary ? darken(colors.primary, 0.2) : blue[700],
// darker: colors.primary ? darken(colors.primary, 0.4) : blue[900],
//
// 2. REVERSED COLORS LIGHT AND DARK THEMES
// lighter: colors.primary ? darken(colors.primary, 0.4) : blue[900],
// light: colors.primary ? darken(colors.primary, 0.2) : blue[700],
// main: colors.primary || blue[500],
// dark: colors.primary ? lighten(colors.primary, 0.3) : blue[200],
// darker: colors.primary ? lighten(colors.primary, 0.4) : blue[100],
//
// 3. ACCESSIBILITY COLORS LIGHT AND DARK THEMES
// lighter: colors.primary ? darken(colors.primary, 0.2) : blue[900],
// light: colors.primary ? darken(colors.primary, 0.1) : blue[800],
// main: colors.primary || blue[700],
// dark: colors.primary || blue[700],
// darker: colors.primary || blue[700],
/*******************************************************************/

const colors: Colors = {
  // background: '',
  // primary: '',
  // secondary: '',
  // success: '',
  // warning: '',
  // error: '',
  // info: '',
  // black: '',
  // white: '',
  // red: '',
  // pink: '',
  // purple: '',
  // deepPurple: '',
  // indigo: '',
  // blue: '',
  // lightBlue: '',
  // cyan: '',
  // teal: '',
  // green: '',
  // lightGreen: '',
  // lime: '',
  // yellow: '',
  // amber: '',
  // orange: '',
  // deepOrange: '',
  // brown: '',
  // blueGrey: '',
  // grey: '',
}

const gradients = {
  primary: `linear-gradient(135deg, ${
    colors.primary ? darken(colors.primary, 0.5) : blue[900]
  } 0%, ${colors.primary ? lighten(colors.primary, 0.2) : blue[500]} 100%)`,
  secondary: `linear-gradient(135deg, ${
    colors.secondary ? darken(colors.secondary, 0.5) : pink[900]
  } 0%, ${colors.secondary ? lighten(colors.secondary, 0.2) : pink[500]} 100%)`,
  success: `linear-gradient(135deg, ${
    colors.success ? darken(colors.success, 0.5) : green[900]
  } 0%, ${colors.success ? lighten(colors.success, 0.2) : green[500]} 100%)`,
  warning: `linear-gradient(135deg, ${
    colors.warning ? darken(colors.warning, 0.5) : orange[900]
  } 0%, ${colors.warning ? lighten(colors.warning, 0.2) : orange[500]} 100%)`,
  error: `linear-gradient(135deg, ${
    colors.error ? darken(colors.error, 0.5) : red[900]
  } 0%, ${colors.error ? lighten(colors.error, 0.2) : red[500]} 100%)`,
  info: `linear-gradient(135deg, ${
    colors.info ? darken(colors.info, 0.5) : lightBlue[900]
  } 0%, ${colors.info ? lighten(colors.info, 0.2) : lightBlue[500]} 100%)`,
}

const fonts: string = [
  'Inter',
  'Open Sans',
  'Montserrat',
  'Roboto',
  'sans-serif',
].join(',')

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: colors.background || grey[900],
    },
    primary: {
      lighter: colors.primary ? darken(colors.primary, 0.4) : blue[900],
      light: colors.primary ? darken(colors.primary, 0.2) : blue[700],
      main: colors.primary || blue[500],
      dark: colors.primary ? lighten(colors.primary, 0.3) : blue[200],
      darker: colors.primary ? lighten(colors.primary, 0.4) : blue[100],
    },
    secondary: {
      lighter: colors.secondary ? darken(colors.secondary, 0.4) : pink[900],
      light: colors.secondary ? darken(colors.secondary, 0.2) : pink[700],
      main: colors.secondary || pink[500],
      dark: colors.secondary ? lighten(colors.secondary, 0.3) : pink[200],
      darker: colors.secondary ? lighten(colors.secondary, 0.4) : pink[100],
    },
    success: {
      lighter: colors.success ? darken(colors.success, 0.4) : green[900],
      light: colors.success ? darken(colors.success, 0.2) : green[700],
      main: colors.success || green[500],
      dark: colors.success ? lighten(colors.success, 0.3) : green[200],
      darker: colors.success ? lighten(colors.success, 0.4) : green[100],
    },
    warning: {
      lighter: colors.warning ? darken(colors.warning, 0.4) : orange[900],
      light: colors.warning ? darken(colors.warning, 0.2) : orange[700],
      main: colors.warning || orange[500],
      dark: colors.warning ? lighten(colors.warning, 0.3) : orange[200],
      darker: colors.warning ? lighten(colors.warning, 0.4) : orange[100],
    },
    error: {
      lighter: colors.error ? darken(colors.error, 0.4) : red[900],
      light: colors.error ? darken(colors.error, 0.2) : red[700],
      main: colors.error || red[500],
      dark: colors.error ? lighten(colors.error, 0.3) : red[200],
      darker: colors.error ? lighten(colors.error, 0.4) : red[100],
    },
    info: {
      lighter: colors.info ? darken(colors.info, 0.4) : lightBlue[900],
      light: colors.info ? darken(colors.info, 0.2) : lightBlue[700],
      main: colors.info || lightBlue[500],
      dark: colors.info ? lighten(colors.info, 0.3) : lightBlue[200],
      darker: colors.info ? lighten(colors.info, 0.4) : lightBlue[100],
    },
    gradients: {
      primary: gradients.primary,
      secondary: gradients.secondary,
      success: gradients.success,
      warning: gradients.warning,
      error: gradients.error,
      info: gradients.info,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: fonts || 'Helvetica, sans-serif',
    h1: {
      fontSize: 50,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 25,
      fontWeight: 700,
      lineHeight: 1.2,
      // color: colors.alpha.black[100],
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: 1.4,
      // color: colors.alpha.black[70],
    },
    subtitle2: {
      fontSize: 15,
      lineHeight: 1.4,
      // color: colors.alpha.black[70],
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.4,
      // color: colors.alpha.black[70],
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: 12,
      lineHeight: 1.4,
      // color: colors.alpha.black[50],
    },
    overline: {
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
  },
})
console.log('NUI_DarkTheme:', theme)

export const NUI_DarkTheme = responsiveFontSizes(theme)

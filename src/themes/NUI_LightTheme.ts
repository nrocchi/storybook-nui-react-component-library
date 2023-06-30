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
// lighter: colors.primary ? lighten(colors.primary, 0.3) : blue[100],
// light: colors.primary ? lighten(colors.primary, 0.2) : blue[200],
// main: colors.primary || blue[400],
// dark: colors.primary ? darken(colors.primary, 0.3) : blue[700],
// darker: colors.primary ? darken(colors.primary, 0.5) : blue[900],
//
// 2. REVERSED COLORS LIGHT AND DARK THEMES
// lighter: colors.primary ? lighten(colors.primary, 0.3) : blue[100],
// light: colors.primary ? lighten(colors.primary, 0.2) : blue[200],
// main: colors.primary || blue[400],
// dark: colors.primary ? darken(colors.primary, 0.3) : blue[700],
// darker: colors.primary ? darken(colors.primary, 0.5) : blue[900],
//
// 3. ACCESSIBILITY COLORS LIGHT AND DARK THEMES
// lighter: colors.primary ? lighten(colors.primary, 0.3) : blue[100],
// light: colors.primary ? lighten(colors.primary, 0.2) : blue[200],
// main: colors.primary || blue[400],
// dark: colors.primary ? darken(colors.primary, 0.1) : blue[500],
// darker: colors.primary ? darken(colors.primary, 0.2) : blue[600],
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
    colors.primary ? lighten(colors.primary, 0.2) : blue[100]
  } 0%, ${colors.primary ? darken(colors.primary, 0.5) : blue[400]} 100%)`,
  secondary: `linear-gradient(135deg, ${
    colors.secondary ? lighten(colors.secondary, 0.2) : pink[100]
  } 0%, ${colors.secondary ? darken(colors.secondary, 0.5) : pink[400]} 100%)`,
  success: `linear-gradient(135deg, ${
    colors.success ? lighten(colors.success, 0.2) : green[100]
  } 0%, ${colors.success ? darken(colors.success, 0.5) : green[400]} 100%)`,
  warning: `linear-gradient(135deg, ${
    colors.warning ? lighten(colors.warning, 0.2) : orange[100]
  } 0%, ${colors.warning ? darken(colors.warning, 0.5) : orange[400]} 100%)`,
  error: `linear-gradient(135deg, ${
    colors.error ? lighten(colors.error, 0.2) : red[100]
  } 0%, ${colors.error ? darken(colors.error, 0.5) : red[400]} 100%)`,
  info: `linear-gradient(135deg, ${
    colors.info ? lighten(colors.info, 0.2) : lightBlue[100]
  } 0%, ${colors.info ? darken(colors.info, 0.5) : lightBlue[400]} 100%)`,
}

const fonts: string = [
  'Inter',
  'Open Sans',
  'Montserrat',
  'Roboto',
  'sans-serif',
].join(',')

const shadows = {
  card: '0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
}

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: colors.background || grey[50],
    },
    primary: {
      lighter: colors.primary ? lighten(colors.primary, 0.3) : blue[100],
      light: colors.primary ? lighten(colors.primary, 0.2) : blue[200],
      main: colors.primary || blue[400],
      dark: colors.primary ? darken(colors.primary, 0.3) : blue[700],
      darker: colors.primary ? darken(colors.primary, 0.5) : blue[900],
    },
    secondary: {
      lighter: colors.secondary ? lighten(colors.secondary, 0.3) : pink[100],
      light: colors.secondary ? lighten(colors.secondary, 0.2) : pink[200],
      main: colors.secondary || pink[400],
      dark: colors.secondary ? darken(colors.secondary, 0.3) : pink[700],
      darker: colors.secondary ? darken(colors.secondary, 0.5) : pink[900],
    },
    success: {
      lighter: colors.success ? lighten(colors.success, 0.3) : green[100],
      light: colors.success ? lighten(colors.success, 0.2) : green[200],
      main: colors.success || green[400],
      dark: colors.success ? darken(colors.success, 0.3) : green[700],
      darker: colors.success ? darken(colors.success, 0.5) : green[900],
    },
    warning: {
      lighter: colors.warning ? lighten(colors.warning, 0.3) : orange[100],
      light: colors.warning ? lighten(colors.warning, 0.2) : orange[200],
      main: colors.warning || orange[400],
      dark: colors.warning ? darken(colors.warning, 0.3) : orange[700],
      darker: colors.warning ? darken(colors.warning, 0.5) : orange[900],
    },
    error: {
      lighter: colors.error ? lighten(colors.error, 0.3) : red[100],
      light: colors.error ? lighten(colors.error, 0.2) : red[200],
      main: colors.error || red[400],
      dark: colors.error ? darken(colors.error, 0.3) : red[700],
      darker: colors.error ? darken(colors.error, 0.5) : red[900],
    },
    info: {
      lighter: colors.info ? lighten(colors.info, 0.3) : lightBlue[100],
      light: colors.info ? lighten(colors.info, 0.2) : lightBlue[200],
      main: colors.info || lightBlue[400],
      dark: colors.info ? darken(colors.info, 0.3) : lightBlue[700],
      darker: colors.info ? darken(colors.info, 0.5) : lightBlue[900],
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
  // shadows: {
  //   card: '0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
  // },
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
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          boxShadow: 'none',
        },
        elevation: {
          boxShadow: shadows.card,
        },
        outlined: {
          boxShadow: shadows.card,
        },
      },
    },
  },
})
console.log('NUI_LightTheme:', theme)

theme.shadows.push(shadows.card)

export const NUI_LightTheme = responsiveFontSizes(theme)

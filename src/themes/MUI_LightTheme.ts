import {createTheme, responsiveFontSizes} from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export const MUI_LightTheme = responsiveFontSizes(theme)

import {createTheme, responsiveFontSizes} from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export const MUI_DarkTheme = responsiveFontSizes(theme)

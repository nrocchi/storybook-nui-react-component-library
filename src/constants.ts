import {MUI_DarkTheme} from './themes/MUI_DarkTheme'
import {MUI_LightTheme} from './themes/MUI_LightTheme'
import {NUI_DarkTheme} from './themes/NUI_DarkTheme'
import {NUI_LightTheme} from './themes/NUI_LightTheme'

export const APP_TITLE = 'NUI Design System'
export const APP_TITLE_URL = 'https://github.com/nrocchi'

export const APP_THEMES = [
  {
    theme: NUI_LightTheme,
    value: 'nui-light',
    left: '☀️',
    title: 'NUI Light Theme',
  },
  {
    theme: NUI_DarkTheme,
    value: 'nui-dark',
    left: '🌙',
    title: 'NUI Dark Theme',
  },
  {
    theme: MUI_LightTheme,
    value: 'mui-light',
    left: '☀️',
    title: 'MUI Light Theme',
  },
  {
    theme: MUI_DarkTheme,
    value: 'mui-dark',
    left: '🌙',
    title: 'MUI Dark Theme',
  },
]

export const APP_LOCALES = [
  {
    value: 'en',
    title: 'English',
  },
  {
    value: 'fr',
    title: 'French',
  },
]

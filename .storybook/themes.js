import {useMemo} from 'react'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {APP_THEMES} from '../src/constants'

export const withThemes = (Story, context) => {
  const {theme: currentTheme} = context.globals

  const theme = useMemo(
    () =>
      APP_THEMES.filter((item) => item.value === currentTheme)[0].theme ||
      APP_THEMES[0].theme,
    [currentTheme],
  )

  document.body.style.backgroundColor = theme.palette.background.default

  const targetNode = document.body
  const config = {childList: true, subtree: true}

  const callback = function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        if (document.getElementsByClassName('docs-story')) {
          const docs = document.getElementsByClassName('docs-story')

          Array.from(
            docs,
            (e) => (e.style.backgroundColor = theme.palette.background.default),
          )
        }
      }
    }
  }

  let observer
  if (observer === undefined) {
    observer = new MutationObserver(callback)
    observer.observe(targetNode, config)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  )
}

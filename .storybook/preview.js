import {themes} from '@storybook/theming'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import {DocsContainer} from './DocsContainer'
import {withThemes} from './themes'
import {withI18next} from './language'
import {
  APP_THEMES,
  APP_LOCALES,
  APP_TITLE,
  APP_TITLE_URL,
} from '../src/constants'
import React, {Suspense} from 'react'
import {I18nextProvider} from 'react-i18next'
import i18n from '../src/language/i18n'

const {addDecorator} = require('@storybook/react')
const {jsxDecorator} = require('storybook-addon-jsx')

addDecorator(jsxDecorator)

export const decorators = [withThemes, withI18next]

export const globalTypes = {
  theme: {
    name: 'theme',
    title: 'theme',
    description: 'Select the theme',
    defaultValue: APP_THEMES[0].value,
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: APP_THEMES,
    },
  },
  locale: {
    name: 'Locale',
    title: 'locale',
    description: 'Select the locale',
    toolbar: {
      icon: 'globe',
      dynamicTitle: true,
      items: APP_LOCALES,
    },
  },
}

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  backgrounds: {disable: true, grid: {disable: true}},
  // layout: 'centered',
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'light',
    light: {
      ...themes.normal,
      brandTitle: APP_TITLE,
      brandUrl: APP_TITLE_URL,
      brandTarget: '_self',
    },
    dark: {
      ...themes.dark,
      brandTitle: APP_TITLE,
      brandUrl: APP_TITLE_URL,
      brandTarget: '_self',
    },
  },
  // viewMode: "docs",
  docs: {
    container: DocsContainer,
    // page: () => (
    //   <>
    //     <Title />
    //     <Subtitle />
    //     <Description />
    //     <Primary />
    //     <ArgsTable story={PRIMARY_STORY} />
    //     <Stories title="Examples" />
    //   </>
    // ),
  },
  options: {
    showToolbar: true,
    storySort: {
      method: 'alphabetical',
      // Order Introduction story first
      order: ['Introduction'],
    },
  },
  jsx: {
    showDefaultProps: false,
  },
}

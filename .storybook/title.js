import addons from '@storybook/addons'
import {STORY_RENDERED} from '@storybook/core-events'
import {APP_TITLE} from '../src/constants'

addons.register('title', (api) => {
  let interval = null
  const setTitle = () => {
    clearTimeout(interval)
    let storyData = null
    try {
      storyData = api.getCurrentStoryData()
    } catch (e) {
      console.log('storyData Error:', e)
    }
    let title
    if (!storyData) {
      title = APP_TITLE
    } else {
      title = `${storyData.kind} - ${storyData.name} ⋅ ${APP_TITLE}`
    }
    if (document.title !== title) {
      document.title = title
    }
    interval = setTimeout(setTitle, 100)
  }
  setTitle()
  api.on(STORY_RENDERED, () => {
    setTitle()
  })
})

import favicon from './public/favicon.ico'
import faviconSVG from './public/favicon.svg'
import './title'
// import addons from '@storybook/addons'

// let firstLoad = true
// addons.register('first', (api) => {
//   api.onStory((kind, story) => {
//     // when you enter a story, if you are just loading storybook up, default to a specific kind/story.
//     if (firstLoad) {
//       firstLoad = false // make sure to set this flag to false, otherwise you will never be able to look at another story.
//       api.selectStory('Introduction', 'default story')
//     }
//   })
// })

const link = document.createElement('link')
link.setAttribute('rel', 'shortcut icon')
link.setAttribute('href', favicon)
document.head.appendChild(link)

const link2 = document.createElement('link')
link2.setAttribute('rel', 'apple-touch-icon')
link2.setAttribute('href', faviconSVG)
document.head.appendChild(link2)

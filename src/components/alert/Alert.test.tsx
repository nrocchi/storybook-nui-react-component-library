import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import {composeStories} from '@storybook/testing-react'
import Alert from './Alert'
import * as stories from './Alert.stories'

describe('Alert', () => {
  // TESTING COMPONENT
  test('Render Alert component', () => {
    render(<Alert />)
  })

  // TODO: ADD MORE COMPONENT TESTS

  // TESTING STORIES
  const testCases = Object.values(composeStories(stories)).map((Story: any) => [
    Story.storyName!,
    Story,
  ])

  test.each(testCases)('Render %s story', async (_storyName, Story) => {
    const tree = render(<Story />)
    expect(tree.baseElement).toMatchSnapshot()
  })

  // TODO: ADD MORE STORIES TESTS
})

import React from 'react'
import styled, injectGlobal } from 'styled-components'
import { configure, addDecorator, setAddon } from '@storybook/react'

injectGlobal`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Roboto');
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.05);
    background-image: repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px);
    background-size: 8px 8px;
  }
`

addDecorator(story => (
    <div style={{ padding: '20px' }}>
      {story()}
    </div>
  )
)

function loadStories () {
  const context = require.context('../src', true, /\.story\.js$/)
  context.keys().forEach((filename) => context(filename))
}

configure(loadStories, module)

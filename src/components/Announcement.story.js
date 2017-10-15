import React from 'react'
import { storiesOf } from '@storybook/react'
import Announcement from './Announcement.jsx'

storiesOf('Announcement', module)
.add('Primary', () => (
  <Announcement />
))

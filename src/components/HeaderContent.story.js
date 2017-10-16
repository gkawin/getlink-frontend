import React from 'react'
import { storiesOf } from '@storybook/react'
import HeaderContent from './HeaderContent.jsx'
import Faker from 'faker'

storiesOf('Header Content', module)
.add('Primary', () => (
  <HeaderContent avatar={Faker.image.avatar()} />
))

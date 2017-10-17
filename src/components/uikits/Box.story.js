import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from './Box.jsx'
import Faker from 'faker'

const mockData = {
  photo: Faker.image.image(),
  label: Faker.lorem.word(),
  shortDesc: Faker.lorem.sentence()
}

storiesOf('Box', module)
.add('Primary', () => (
  <Box {...mockData} />
))

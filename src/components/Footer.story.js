import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from './Footer.jsx'
import Faker from 'faker'

storiesOf('Footer', module)
.add('Primary', () => (
  <Footer
    items={[
      {
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      },
      {
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      },
      {
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      }
    ]}
  />
))

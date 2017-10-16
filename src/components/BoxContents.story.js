import React from 'react'
import { storiesOf } from '@storybook/react'
import BoxContents from './BoxContents.jsx'
import Faker from 'faker'

storiesOf('BoxContents', module)
.add('Primary', () => (
  <BoxContents
    data={[
      {
        photo: Faker.image.image(),
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      },
      {
        photo: Faker.image.image(),
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      },
      {
        photo: Faker.image.image(),
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      },
      {
        photo: Faker.image.image(),
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      },
      {
        photo: Faker.image.image(),
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      },
      {
        photo: Faker.image.image(),
        label: Faker.lorem.word(),
        shortDesc: Faker.lorem.sentence()
      },
    ]}
  />
))

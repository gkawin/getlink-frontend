import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from './Footer.jsx'

storiesOf('Footer', module)
.add('Primary', () => (
  <Footer
    contents={[
      {
        label: 'Company Name',
        menus: [
          'About us',
          'Careers',
          'Blogs',
          'Term of service',
          'Privacy policy'
        ]
      },
      {
        label: 'For Customers',
        menus: [ 'Request demo', 'FAQ' ]
      },
      {
        label: 'Community',
        menus: [ 'Travel festival', 'Startup 101 Workshop', 'DrinkEntrepreneurs' ]
      }
    ]}
  />
))

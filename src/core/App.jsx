import React from 'react'
import PropTypes from 'prop-types'
import Faker from 'faker'
import styled from 'styled-components'
import { colors } from 'main-design'

import HeaderContent from '../components/HeaderContent.jsx'
import Announcement from '../components/Announcement.jsx'
import BoxContents from '../components/BoxContents.jsx'
import Footer from '../components/Footer.jsx'

class App extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  render () {
    return (
      <div className={this.props.className}>
        <section className='header-content'>
          <HeaderContent
            avatar={Faker.image.image()}
          />
        </section>
        <section className='announcement'>
          <Announcement />
        </section>
        <section className='box-contents'>
          <BoxContents contents={[
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
        </section>
        <section className='footer'>
          <Footer contents={[
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
        </section>
      </div>
    )
  }
}

export default styled(App)`
`

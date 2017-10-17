import React from 'react'
import PropTypes from 'prop-types'
import Faker from 'faker'
import styled from 'styled-components'
import fill from 'lodash/fill'

import HeaderContent from '../components/HeaderContent.jsx'
import Announcement from '../components/Announcement.jsx'
import BoxContents from '../components/BoxContents.jsx'
import Footer from '../components/Footer.jsx'

class App extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  getFakeItems () {
    return ({
      photo: Faker.image.image(),
      label: Faker.lorem.word(),
      shortDesc: Faker.lorem.sentence()
    })
  }
  render () {
    const boxContents = fill(Array(8), this.getFakeItems())
    return (
      <div className={this.props.className}>
        <header className='header-content'>
          <HeaderContent avatar={require('../asserts/company_logo.png')} />
        </header>
        <section className='announcement'>
          <Announcement />
        </section>
        <section className='box-contents'>
          <BoxContents contents={boxContents} />
        </section>
        <footer className='footer'>
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
        </footer>
      </div>
    )
  }
}

export default styled(App)`
`

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import _ from 'lodash'
import { colors } from 'main-design'

class Footer extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    contents: PropTypes.array.isRequired,
  }
  renderContactUs = () => (
    <Col sm={6} xs={12} >
      <Image
        src={require('../asserts/company_logo.png')} className='col__company-image' responsive
      />
      <div className='col__info-line' />
      <div className='col__vistion'>
        Company name is a quality cheapest price of whole hotel in the world.
      </div>
      <div className='col__social-icons'>
        <Image src='https://png.icons8.com/facebook/color/48' responsive />
        <Image src='https://png.icons8.com/linkedin/color/48' responsive />
        <Image src='https://png.icons8.com/instagram/color/48' responsive />
        <Image src='https://png.icons8.com/twitter/color/48' responsive />
      </div>
    </Col>
  )
  renderFooterBoxItem = (item, index) => {
    return (
      <Col sm={2} xs={6} key={index}>
        <div className='col__title'>{item.label}</div>
        <div className='col__info-line' />
        <ul className='col__menu-list'>
          {_.map(item.menus, (menu, index) => <li className='col__menu-item' key={index}>{menu}</li>)}
        </ul>
      </Col>
    )
  }
  render () {
    return (
      <div className={this.props.className}>
        <Grid>
          <Row className='grid-row'>
            {_.map(this.props.contents, this.renderFooterBoxItem)}
            {this.renderContactUs()}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default styled(Footer)`
  border-top: 2px solid ${colors.$grey400};
  box-sizing: border-box;
  background-color: ${colors.$grey100};
  .grid-row {
    /* //HACK: space margin was adjusted by debugging on browser. */
    margin: 20px 70px;
    @media (max-width: 767px) {
      margin: 20px 0;
    }
  }
  .col {
    &__title {
      font-size: 16px;
      padding-bottom: 10px;
      color: ${colors.$grey700};
    }
    &__info-line {
      width: 38px;
      height: 4px;
      background: ${colors.$teal400};
      border-radius: 6px;
    }
    &__menu-list {
      list-style: none;
      margin-top: 10px;
      padding-left: 0;
    }
    &__menu-item {
      color: ${colors.$grey500};
      line-height: 32px;
      cursor: pointer;
      &:hover {
        color: ${colors.$teal400};
      }
    }
    &__company-image {
      margin-bottom: 20px;
    }
    &__vistion {
      color: ${colors.$grey500};
      margin: 10px 0;
    }
    &__social-icons {
      display: flex;
      flex-direction: row;
    }
  }
`

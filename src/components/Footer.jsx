import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import _ from 'lodash'
import { colors } from 'main-design'

class Footer extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
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
    </Col>
  )
  renderFooterBoxItem = (item, index) => {
    return (
      <Col sm={2} xs={4} key={index}>
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
      <footer className={this.props.className}>
        <Grid className='grid__container'>
          <Row className='row__content'>
            {_.map(this.props.items, this.renderFooterBoxItem)}
            {this.renderContactUs()}
          </Row>
          <Row className='row__copyright'>
            <Col sm={12}>©2017 Company Name (Thailand) Co., Ltd. All Rights Reserved.</Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default styled(Footer)`
  height: 60px;
  .grid__container {
    box-sizing: border-box;
  }
  .row {
    &__content {
      border-bottom: 1px solid ${colors.$grey200};
      padding: 20px;
    }
    &__copyright {
      text-align: center;
      padding: 20px;
      color: ${colors.$grey400};
      font-size: 14px;
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
      color: ${colors.$grey400};
      font-weight: lighter;
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
      color: ${colors.$grey400};
      font-weight: lighter;
      margin-top: 10px;
    }
  }
`

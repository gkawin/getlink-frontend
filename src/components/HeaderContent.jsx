import React from 'react'
import PropTypes from 'prop-types'
import { Image, PageHeader, small } from 'react-bootstrap'
import styled from 'styled-components'

class HeaderContent extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
  }
  render () {
    return (
      <PageHeader className={this.props.className}>
        <Image className='avatar-image' src={this.props.avatar} circle />
        <small className='menu-horizontal'>
          <span className='menu-horizontal__link'>Home</span>
          <span className='menu-horizontal__link'>About us</span>
          <span className='menu-horizontal__link'>Contact us</span>
        </small>
      </PageHeader>
    )
  }
}

export default styled(HeaderContent)`
  text-align: center;
  .avatar-image {
    width: 100px;
    height: 100px;
  }
  .menu-horizontal {
    display: block;
    &__link {
      margin-right: 10px;
      font-size: 14px;
      margin-top: 10px;
      display: inline-block;
      cursor: pointer;
      text-decoration: underline;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

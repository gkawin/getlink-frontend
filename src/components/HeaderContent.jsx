import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from 'main-design'

import withViewport from '../concerns/withViewport'

class HeaderContent extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    avatar: PropTypes.string,
    viewport: PropTypes.bool,
  }
  renderMenu () {
    return (
      <div>
        <Image className='avatar-image' src={this.props.avatar} circle />
        <div className='menu'>
          <span className='menu__link'>Home</span>
          <span className='menu__link'>About us</span>
          <span className='menu__link'>Contact us</span>
        </div>
      </div>

    )
  }
  render () {
    return (
      <div className={this.props.className}>
        {(!this.props.viewport) ? this.renderMenu() : null}
      </div>
    )
  }
}

export default withViewport(styled(HeaderContent)`
  text-align: center;
  padding: ${props => !props.viewport ? '20px 0' : 0};
  .avatar-image {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  .menu {
    font-size: 18px;
    color: ${colors.$grey900};
    &__link {
      margin-right: 10px;
      display: inline-block;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`)

import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { colors } from 'main-design'

const withMobileDevice = (BaseComponent) => {
  return class Container extends React.PureComponent {
    state = { viewport: false }
    componentDidMount () {
      window.addEventListener('resize', this.updateDimensions)
    }
    componentWillUnmount () {
      window.removeEventListener('resize', this.updateDimensions)
    }
    updateDimensions = () => {
      const viewport = window.innerWidth < 768
      this.setState({ viewport })
    }
    render () {
      return (
        <BaseComponent {...this.props} viewport={this.state.viewport} />
      )
    }
  }
}

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
  renderHambergerMenu () {
    return (
      <div>
        <Image className='avatar-image' src={this.props.avatar} circle />

      </div>
    )
  }
  render () {
    return (
      <div className={this.props.className}>
        {(!this.props.viewport) ? this.renderMenu() : this.renderHambergerMenu()}
      </div>
    )
  }
}

export default withMobileDevice(styled(HeaderContent)`
  text-align: center;
  padding: 20px 0;
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

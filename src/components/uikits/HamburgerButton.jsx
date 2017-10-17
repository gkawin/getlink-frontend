import React from 'react'
import styled from 'styled-components'
import { colors } from 'main-design'

class HamburgerButton extends React.PureComponent {
  render () {
    return (
      <button className={this.props.className}>
        <span />
        <span />
        <span />
      </button>
    )
  }
}

export default styled(HamburgerButton)`
  span {
    display: block;
    position: absolute;
    left: 0;
    border-radius: 9px;
    background: ${colors.$teal400};
  }
`

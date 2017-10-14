import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

class Box extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  render () {
    return (
      <div className={this.props.className}>
        <Button>Default</Button>
      </div>
    )
  }
}

export default styled(Box)`
  width: 300px;
  height: 300px;
  background-color: white;
`

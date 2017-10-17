import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'

class Anouncement extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  render () {
    return (
      <Jumbotron className={this.props.className}>
        <div className='content'>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
      </Jumbotron>
    )
  }
}

export default styled(Anouncement)`
  padding: 50px;
  text-align: center;
  background: url(${require('../asserts/Business_men_background.png')});
  height: 500px;
  .content {
    position: relative;
    top: 25%;
    color: white;
  }
`

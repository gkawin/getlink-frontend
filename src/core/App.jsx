import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Button } from 'react-bootstrap'
import styled from 'styled-components'

class App extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  render () {
    return (
      <div className={this.props.className}>
        <section>
          header
        </section>
        <section>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><Button bsStyle='primary'>Learn more</Button></p>
          </Jumbotron>
        </section>
        <section>
          Content Cards
        </section>
        <section>
          footer
        </section>
      </div>
    )
  }
}

export default styled(App)`
  position: fixed;
  top: 0;
  left: 0;
`

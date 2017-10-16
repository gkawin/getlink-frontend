import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-bootstrap'
import _ from 'lodash'

class Footer extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
  }
  renderContactUs = () => <Col sm={6}>Foot Card 4</Col>
  renderFooterBoxItem = (item, index) => {
    return (
      <Col sm={2} key={index}>
        <h3>{item.label}</h3>
        {item.shortDesc}
      </Col>
    )
  }
  render () {
    return (
      <Footer>
        <Grid className={this.props.className}>
          <Row>
            {_.map(this.props.items, this.renderFooterBoxItem)}
            {this.renderContactUs()}
          </Row>
        </Grid>
      </Footer>
    )
  }
}

export default styled(Footer)`
  box-sizing: border-box;
`

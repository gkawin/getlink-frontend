import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-bootstrap'
import _ from 'lodash'

import Box from './Box.jsx'

class BoxContents extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    contents: PropTypes.array.isRequired,
  }

  renderItems = () => {
    const itemPerRow = 3
    const chuckedItems = _.chunk(this.props.contents, itemPerRow)
    return _.map(chuckedItems, (items, index) => (
      <Row key={index} className='show-grid'>
        {_.map(items, (item, index) => (
          <Col sm={4} key={index}>
            <Box
              photo={item.photo}
              label={item.label}
              shortDesc={item.shortDesc}
            />
          </Col>
      ))}
      </Row>
    ))
  }
  render () {
    return (
      <div className={this.props.className}>
        <Grid>
          {this.renderItems()}
        </Grid>
      </div>
    )
  }
}

export default styled(BoxContents)`
`

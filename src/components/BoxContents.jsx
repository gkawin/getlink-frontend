import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-bootstrap'
import map from 'lodash/map'
import chunk from 'lodash/chunk'

import Box from './uikits/Box.jsx'

class BoxContents extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    contents: PropTypes.array.isRequired,
  }

  renderItems = () => {
    const itemPerRow = 4
    const chuckedItems = chunk(this.props.contents, itemPerRow)
    return map(chuckedItems, (items, index) => (
      <Row key={index} className='grid-row'>
        {map(items, (item, index) => (
          <Col sm={3} key={index}>
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
  .grid-row {
  /* //HACK: space margin was adjusted by debugging on browser. */
    margin: 20px 70px;
    @media (max-width: 767px) {
      margin: 20px 0;
    }
  }
`

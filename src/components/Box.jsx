import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Thumbnail } from 'react-bootstrap'
import Faker from 'faker'

class Box extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  render () {
    const imgSrc = Faker.image.image()
    return (
      <div className={this.props.className}>
        <Thumbnail src={imgSrc} alt='200x200' >
          <h2 className='label-word'>{Faker.lorem.word()}</h2>
          <p>{Faker.lorem.sentence()}</p>
        </Thumbnail>
      </div>
    )
  }
}

export default styled(Box)`
  width: 200px;
  height: 200px;
`

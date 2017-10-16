import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail } from 'react-bootstrap'

class Box extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    photo: PropTypes.string,
    label: PropTypes.string,
    shortDesc: PropTypes.string,
  }
  render () {
    return (
      <Thumbnail src={this.props.photo} className={this.props.className}>
        <h2 className='label-word'>{this.props.label}</h2>
        <p>{this.props.shortDesc}</p>
      </Thumbnail>
    )
  }
}

export default Box

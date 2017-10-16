import React from 'react'
import PropTypes from 'prop-types'
import { Thumbnail } from 'react-bootstrap'
import styled from 'styled-components'
import Dotdotdot from 'react-dotdotdot'
import { colors } from 'main-design'

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
        <div className='label-word'>{this.props.label}</div>
        <Dotdotdot clamp={2} className='short-desc'>
          {this.props.shortDesc}
        </Dotdotdot>
      </Thumbnail>
    )
  }
}

export default styled(Box)`
  /* //HACK: the height value was adjusted by debugging on browser. */
  height: 260px;
  .label-word {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .short-desc {
    color: ${colors.$grey700};
  }
`

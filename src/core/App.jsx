import React from 'react'
import PropTypes from 'prop-types'

class App extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  render () {
    return (
      <div className={this.props.className}>
        <section>
          HeaderContent
        </section>
        <section>
          Announcement
        </section>
        <section>
          BoxContents
        </section>
        <section>
          footer
        </section>
      </div>
    )
  }
}

export default App

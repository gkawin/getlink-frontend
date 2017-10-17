import React from 'react'

const withViewport = (BaseComponent) => {
  return class Container extends React.PureComponent {
    state = { viewport: false }
    componentDidMount () {
      this.updateDimensions()
      window.addEventListener('resize', this.updateDimensions)
    }
    componentWillUnmount () {
      window.removeEventListener('resize', this.updateDimensions)
    }
    updateDimensions = () => {
      const viewport = window.innerWidth < 768
      this.setState({ viewport })
    }
    render () {
      return (
        <BaseComponent {...this.props} viewport={this.state.viewport} />
      )
    }
  }
}

export default withViewport

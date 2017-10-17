const path = require('path')

const modulePlugins = require('./webpack/modulePlugins')
const moduleRulesBabel = require('./webpack/moduleRulesBabel')
const moduleAliases = require('./webpack/moduleAliases')
const moduleCommons = require('./webpack/moduleCommons')

const development = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'core', 'entry.js'),
    vendor: [ 'react', 'react-dom', 'prop-types', 'lodash' ]
  },
  output: {
    filename: `[name][${development ? 'hash' : 'chunkhash'}].bundle.js`,
  },
  resolve: {
    alias: Object.assign({ }, moduleAliases,
      { 'main-design$': require.resolve('./src/design') }
    )
  },
  module: {
    rules: [
      ...moduleRulesBabel,
      ...moduleCommons
    ]
  },
  plugins: modulePlugins,
  node: {
    fs: 'empty'
  }
}

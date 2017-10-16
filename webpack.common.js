const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const modulePlugins = require('./webpack/modulePlugins')
const moduleRulesBabel = require('./webpack/moduleRulesBabel')
const moduleAliases = require('./webpack/moduleAliases')
const moduleCommons = require('./webpack/moduleCommons')

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'core', 'entry.js'),
    vendor: [ 'react', 'react-dom', 'prop-types', 'lodash' ]
  },
  output: {
    filename: '[name].bundle.js',
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
  plugins: [
    ...modulePlugins,
    new CleanWebpackPlugin()
  ],
  node: {
    fs: 'empty'
  }
}

const path = require('path')
const moduleRulesBabel = require('./webpack/moduleRulesBabel')
const moduleAliases = require('./webpack/moduleAliases')
const modulePlugins = require('./webpack/modulePlugins')
const development = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: development ? 'eval' : 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src', 'core', 'entry.js'),
    vendor: [ 'react', 'react-dom', 'prop-types'   ]
  },
  resolve: {
    alias: Object.assign({ }, moduleAliases,
      { 'main-design$': require.resolve('../src/design') }
    )
  },
  output: {
    filename: '[name].bundle.js',
    pathinfo: development
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      ...moduleRulesBabel
    ]
  },
  plugins: modulePlugins,
  devServer: {
    compress: true,
    historyApiFallback: true
  }
}

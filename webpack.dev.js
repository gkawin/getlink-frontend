const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'eval',
  output: {
    pathinfo: true
  },
  devServer: {
    compress: true,
    historyApiFallback: true
  }
})

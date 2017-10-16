const path = require('path')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports  = merge(common, {
  devtool: 'eval',
  output: {
    pathinfo: true
  },
  devServer: {
    compress: true,
    historyApiFallback: true
  }
})

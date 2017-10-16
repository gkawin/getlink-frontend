const path = require('path')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports  = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false
  },
  plugins: [
    new UglifyJSPlugin()
  ]
})

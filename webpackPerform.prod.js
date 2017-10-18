const prodConfig = require('./webpack.prod')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})

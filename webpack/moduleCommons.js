const path = require('path')
const development = process.env.NODE_ENV === 'development'

module.exports = [
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: development ? '[path][name].[ext]' : '[hash].[ext]'
        }
      }
    ]
  }
]

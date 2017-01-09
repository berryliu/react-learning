const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './main.js'
  },
  output: {
    path: './dist',
    filename: 'js/[name].[hash:8].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(css|less)$/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new htmlWebpackPlugin({
      template: 'template/index.html',
      filename: 'index.html'
    })
  ],
  devtool: '#source-map'
}

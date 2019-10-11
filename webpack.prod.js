const path = require('path');
const webpack = require('webpack');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/public/js/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: './src/public/index.html',
      filename: 'index.html'
    }
    )
  ]
}
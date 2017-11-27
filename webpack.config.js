const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    port: 3333,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  entry: ['babel-polyfill', 'react-hot-loader/patch', './app/initialize.jsx'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/assets/index.html',
    }),
  ],
};

module.exports = config;

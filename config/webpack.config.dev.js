const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { resolve } = require('../lib/utils');
const getCssLoaderConfig = require('../lib/css-loader-config');
const baseConfig = require('./webpack.config.base');

const isDevelopment = true;

const devConfig = {
  mode: 'development',
  module: {
    rules: [getCssLoaderConfig(isDevelopment)],
  },
  devServer: {
    static: {
      directory: resolve('dist'),
    },
    port: 8080,
    compress: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./public/template.html'),
    }),
  ],
};

module.exports = merge(baseConfig, devConfig);

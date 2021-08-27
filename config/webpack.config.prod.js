const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { resolve } = require('../lib/utils');
const baseConfig = require('./webpack.config.base');

const prodConfig = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Config',
      template: resolve('./public/template.html'),
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);

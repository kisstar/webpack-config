const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { resolve } = require('../lib/utils');
const getCssLoaderConfig = require('../lib/css-loader-config');
const baseConfig = require('./webpack.config.base');

const isDevelopment = false;

const prodConfig = {
  mode: 'production',
  module: {
    rules: [getCssLoaderConfig(isDevelopment)],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
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
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const getHtmlPluginConfig = require('../lib/html-plugin-config');
const getCssLoaderConfig = require('../lib/css-loader-config');
const baseConfig = require('./webpack.config.base');

const isDevelopment = false;

const prodConfig = {
  mode: 'production',
  output: {
    clean: true,
  },
  module: {
    rules: [getCssLoaderConfig(isDevelopment)],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin(getHtmlPluginConfig(isDevelopment)),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:8].css',
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);

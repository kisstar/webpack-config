const { resolve } = require('../lib/utils');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'js/[name]_[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            exclude: [
              // \\ for Windows, \/ for Mac OS and Linux
              /node_modules[\\\/]core-js/,
              /node_modules[\\\/]webpack[\\\/]buildin/,
            ],
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name]_[hash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]_[hash:8][ext]',
        },
      },
    ],
  },
};

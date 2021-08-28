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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name]_[hash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 4kb
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

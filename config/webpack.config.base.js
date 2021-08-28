const { resolve } = require('../lib/utils');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext]',
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
          filename: 'fonts/[hash][ext]',
        },
      },
    ],
  },
};

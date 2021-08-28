const { resolve } = require('../lib/utils');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'js/main.js',
  },
};

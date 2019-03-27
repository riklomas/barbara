const path = require('path');

module.exports = {
  entry: './index.js',
  watch: true,
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
};
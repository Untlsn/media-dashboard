const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './')
  },
  resolve: {
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    alias: {
      '@': path.resolve(__dirname, "src"),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Libs': path.resolve(__dirname, 'src/libs')
    }
  }
};

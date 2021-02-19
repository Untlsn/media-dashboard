const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '~': path.resolve(__dirname, 'src'),
      '@Libs': path.resolve(__dirname, 'src/libs'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Style': path.resolve(__dirname, 'src/style')
    },
  };
  return config;
};

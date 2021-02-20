const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
        '@Libs': path.resolve(__dirname, 'src/libs'),
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Style': path.resolve(__dirname, 'src/style')
      }
    }
  });
};

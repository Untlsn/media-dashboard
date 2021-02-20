const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Social Dashboard'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        base64Width: 20,
        forceBase64Format: `png`,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, './src/images')
      },
    },
  ],
};

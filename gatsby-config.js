const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Jenny Nguyen',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-50154617-4'
      },
    }
  ],
}


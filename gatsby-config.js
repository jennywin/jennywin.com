const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Jenny Nguyen',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    }
  ],
}


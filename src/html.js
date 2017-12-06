import React from 'react'
import PropTypes from 'prop-types'
import FavIcon from './assets/favicon.ico'

const BUILD_TIME = new Date().getTime() // eslint-disable-line no-unused-vars

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
    headComponents: PropTypes.node,
    postBodyComponents: PropTypes.node,
  }

  /* eslint-disable global-require, import/no-webpack-loader-syntax, react/no-danger */
  render() {
    let css
    if(process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css'),
          }}
        />
      )
    }

    return (
      <html lang="en">
        <head>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-50154617-4"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-50154617-4');
          </script>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Jenny Nguyen</title>
          <link rel="shortcut icon" href={FavIcon} type="image/x-icon" />
          {this.props.headComponents}
          {css}
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

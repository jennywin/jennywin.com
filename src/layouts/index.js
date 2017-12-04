import React from 'react'
import PropTypes from 'prop-types'

import App from 'grommet/components/App'
import Article from 'grommet/components/Article'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/main.scss'

export default class IndexLayout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <App centered={false}>
        <Article>
          <Header />
          {this.props.children()}
          <Footer />
        </Article>
      </App>
    )
  }
}

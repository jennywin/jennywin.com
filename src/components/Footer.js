import React from 'react'

import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'

import Logo from '../assets/logo.svg'

export default class Main extends React.PureComponent {
  render() {
    return (
      <Footer primary>
        <Box
          direction='row'
          justify='center'
          align='center'
          full='horizontal'
          pad='small'
        >
          <Paragraph>
            <strong>© 2017 Jenny Nguyen</strong>
          </Paragraph>
        </Box>
      </Footer>
    )
  }
}

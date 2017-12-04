import React from 'react'

import Header from 'grommet/components/Header'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'

import Logo from '../assets/logo.svg'

export default class Main extends React.PureComponent {
  render() {
    return (
      <Header colorIndex='brand' fixed>
        <Columns justify='between'>
          <Box
            direction='row'
            justify='center'
            align='center'
            pad='small'
          >
            <Anchor href='/'>
              <img src={Logo} className="logo" />
            </Anchor>
            <Anchor href='/'>
              <Title>
                Jenny Nguyen
              </Title>
            </Anchor>
          </Box>
          <Box
            direction='row'
            justify='center'
            align='center'
            flex='grow'
            pad='small'
          >
            <Menu
              responsive
              direction='row'>
              <Anchor href='/' className='active'>
                Home
              </Anchor>
              <Anchor href='/bio'>
                Bio
              </Anchor>
              <Anchor href='/projects'>
                Projects
              </Anchor>
              <Anchor href='/contact'>
                Contact
              </Anchor>
            </Menu>
          </Box>
        </Columns>
      </Header>
    )
  }
}

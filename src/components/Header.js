import React from 'react'

import Header from 'grommet/components/Header'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'

// import Logo from '../assets/logo.svg'
import Logo from './Logo'

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
            <Anchor href='/' className='logo'>
              <Box direction='row'>
                <Logo />
                <Title className='logo__text'>
                  Jenny Nguyen
                </Title>
              </Box>
            </Anchor>
          </Box>
          <Box
            direction='row'
            justify='center'
            align='center'
            flex='grow'
            pad='medium'
          >
            <Menu
              responsive
              direction='row'>
              <Anchor href='/' className='menu__links'>
                Home
              </Anchor>
              <Anchor href='/bio' className='menu__links'>
                Bio
              </Anchor>
              <Anchor href='/projects' className='menu__links'>
                Projects
              </Anchor>
              <Anchor href='/contact' className='menu__links'>
                Contact
              </Anchor>
            </Menu>
          </Box>
        </Columns>
      </Header>
    )
  }
}

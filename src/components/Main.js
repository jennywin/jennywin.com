import React from 'react'

import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Footer from 'grommet/components/Footer'
// import Logo from 'grommet/components/icons/Grommet'

import Logo from '../assets/logo.svg'

export default class Main extends React.PureComponent {
  render() {
    return (
      <Article>
        <Header fixed={true} float={true}>
          <Box
            direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'>
            <img src={Logo} className="logo" />
            <Title>
              Jenny Nguyen (Win)
            </Title>
          </Box>
            <Menu
              responsive={true}
              direction='row'>
              <Anchor href='#' className='active'>
                First action
              </Anchor>
              <Anchor href='#'>
                Second action
              </Anchor>
              <Anchor href='#'>
                Third action
              </Anchor>
            </Menu>
        </Header>
        <Section
          full
          colorIndex="brand"
          pad="large"
          justify="center"
          align="center"
        >
          <Heading tag="h1"><strong>Welcome</strong></Heading>
          <Paragraph>Please log in</Paragraph>
        </Section>
        <Footer primary={true}>
          Footer copy
        </Footer>
      </Article>
    )
  }
}

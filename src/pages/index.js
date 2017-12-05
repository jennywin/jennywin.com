import React from 'react'
import Link from 'gatsby-link'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'

import HeroImage from '../assets/skydiving-switzerland.jpg'

export default class Index extends React.Component {
  render() {
    return (
      <Hero
        background={<Image src={HeroImage} fit='cover' full={true} />}
        backgroundColorIndex='dark'
        size='large'
      >
        <Box
          direction='row'
          colorIndex='neutral-4'
          justify='center'
          pad='small'
        >
          <Heading
            tag='h2'
            strong
            align='center'
          >
            Do things that scare you. It's the only way to really know yourself.
          </Heading>
        </Box>
      </Hero>
    )
  }
}

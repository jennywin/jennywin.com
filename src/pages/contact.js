import React from 'react'
import Helmet from 'react-helmet'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Anchor from 'grommet/components/Anchor'
import Hero from 'grommet/components/Hero'
import Image from 'grommet/components/Image'

import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin'
import SocialCodepenIcon from 'grommet/components/icons/base/SocialCodepen'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'

import HeroImage from '../assets/mokuleia.jpg'

export default class Contact extends React.Component {
  render() {
    return (
      <Section pad='none' margin='none'>
        <Helmet titleTemplate='%s | Jenny Nguyen' title='Contact' />
        <Hero
          background={<Image src={HeroImage} fit='cover' full={true} />}
          backgroundColorIndex='dark'
          size='large'
        >
          <Box
            direction='column'
            colorIndex='neutral-4'
            justify='center'
            align='center'
            pad='small'
            size='medium'
            textAlign='center'
          >
            <Box colorIndex='neutral-3' full='horizontal'>
              <Heading tag='h1' strong align='center'>
                Contact
              </Heading>

              <Paragraph>
                Drop me a line!
              </Paragraph>

              <Heading tag='h3'>
                <strong>j at jennywin.com</strong>
              </Heading>

              <Tiles flush={false} justify='center'>
                <Tile>
                  <Anchor target='_blank' href='http://www.linkedin.com/in/jenny-win'>
                    <SocialLinkedinIcon size='medium' />
                  </Anchor>
                </Tile>
                <Tile>
                  <Anchor target='_blank' href='http://www.github.com/jenny-win'>
                    <SocialGithubIcon size='medium' />
                  </Anchor>
                </Tile>
                <Tile>
                  <Anchor target='_blank' href='http://codepen.io/jennywin/'>
                    <SocialCodepenIcon size='medium' />
                  </Anchor>
                </Tile>
              </Tiles>
            </Box>
          </Box>
        </Hero>
      </Section>
    )
  }
}

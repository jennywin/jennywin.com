import React from 'react'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Anchor from 'grommet/components/Anchor'

import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin'
import SocialCodepenIcon from 'grommet/components/icons/base/SocialCodepen'
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub'

import HeroImage from '../assets/mokuleia.jpg'

export default class Contact extends React.Component {
  render() {
    return (
      <Section
        full
        pad='medium'
        align='center'
      >
        <Heading tag='h1'>
          <strong>Contact</strong>
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
      </Section>
    )
  }
}

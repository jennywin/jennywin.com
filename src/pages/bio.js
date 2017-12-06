import React from 'react'

import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Section from 'grommet/components/Section'

import HeroImage from '../assets/rumi-me.jpg'

export default class Bio extends React.Component {
  render() {
    return (
      <Section pad='none' margin='none'>
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
            full='vertical'
            size='medium'
            textAlign='center'
          >
            <Box colorIndex='neutral-3' full='horizontal'>
              <Heading tag='h1' strong align='center'>
                Bio
              </Heading>
              <Heading tag='h2' strong align='center'>
                Hi! I'm Jenny and that's my dog, Rumi.
            </Heading>
            </Box>
          </Box>
        </Hero>

        <Section pad='medium'>
          <Box full='horizontal' pad='large'>
            <Paragraph size='xlarge'>
              Some quick facts:
            </Paragraph>
            <List>
              <ListItem>I get things done - I'm a solutions architect, a front end developer, a project manager</ListItem>
              <ListItem>I love building things - websites, workflows, processes, Burning Man theme camps - and solving problems</ListItem>
              <ListItem>I'm a huge productivity nerd who loves trying out new to do apps and has a spreadsheet for everything</ListItem>
              <ListItem>Getting outside and going hiking, snowboarding, camping, or galavanting around in nature rejuvenates my soul</ListItem>
              <ListItem>I'm that friend who is always prepared and has everything you need that you didn't know you would need</ListItem>
              <ListItem>I traveled solo for a year to get out of my comfort zone and gain some perspective - I have now been to 19 countries and counting!</ListItem>

            </List>

            <Paragraph size='xlarge'>
              Some of my beliefs, mottos, and principles:
              </Paragraph>
            <List>
            <ListItem>The beautiful thing about learning is that nobody can take it away from you</ListItem>
            <ListItem>Don't assume anything</ListItem>
            <ListItem>Be radically self-reliant, but also know when to ask for help (thanks, Burning Man)</ListItem>
            <ListItem>Don't be an asshole, plain and simple :)</ListItem>
            </List>
          </Box>
        </Section>
      </Section>
    )
  }
}

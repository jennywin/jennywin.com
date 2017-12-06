import React from 'react'

import Heading from 'grommet/components/Heading'
import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Paragraph from 'grommet/components/Paragraph'
import Image from 'grommet/components/Image'
import List from 'grommet/components/List'
import ListItem from 'grommet/components/ListItem'
import Section from 'grommet/components/Section'
import Anchor from 'grommet/components/Anchor'
import Columns from 'grommet/components/Columns'

import HeroImage from '../assets/rumi-me.jpg'

export default class Leanplum extends React.Component {
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
            full='horizontal'
            textAlign='center'
          >
            <Box colorIndex='neutral-3'>
              <Heading tag='h1' strong align='center'>
                Hi, Leanplum!
              </Heading>
              <Heading tag='h2' strong align='center'>
                I'm Jenny, a solutions architect, front-end developer, and project manager.
            </Heading>
            </Box>
          </Box>
        </Hero>

        <Section pad='medium'>
          <Columns justify='between' size='large'>
            <Box pad='medium'>
              <Heading tag='h3' strong>
                Hire me because:
              </Heading>
              <List>
                <ListItem>I love technology because there's always a better way to do something, always more to learn.</ListItem>
                <ListItem>I'm an autodidactic developer who speaks human and engineer.</ListItem>
                <ListItem>I get things done.</ListItem>
                <ListItem>I build things: websites, workflows, processes.</ListItem>
                <ListItem>I build other things: yurts, swamp coolers, solar panel rigs, Burning Man theme camps.</ListItem>
                <ListItem>I do things I'm scared of.</ListItem>
                <ListItem>We both have zero tolerance for jerks. One of my rules in life: Don't be an asshole, plain and simple :)</ListItem>
                <ListItem>I'm a relentless problem solver at the core.</ListItem>
                <ListItem>I'm capable of working solo, but also thrive when working with a team.</ListItem>
                <ListItem>I have experience working remotely and for an international company.</ListItem>
                <ListItem>I'm capable of working solo, but also thrive when working with a team.</ListItem>
                <ListItem>I care about bridging the (empathy) gap across cross-functional teams to develop collaborative relationships.</ListItem>
                <ListItem>I get down on the dance floor.</ListItem>
                <ListItem>I extreme costume.</ListItem>
                <ListItem>My dog wants to join the Leanplum "puppies galore" crew. Woof!</ListItem>
                <ListItem>I'm based in San Francisco and love traveling (I traveled solo for a year!).</ListItem>
              </List>
            </Box>

            <Box pad='medium'>
              <Heading tag='h4' strong>
                I deliver custom solutions for clients.
              </Heading>
              <Paragraph>
                While managing multiple projects in parallel, I serve as the bridge between clients, sales, delivery, and engineering. To win client trust, I develop an intimate knowledge of their needs, requirements, and data. What I do on the regular: client consultations, data analysis, develop workflows and processes, write scripts, and design solutions.
              </Paragraph>

              <Heading tag='h4' strong>
                I understand the importance of engaging the 💩 out of your users.
              </Heading>
              <Paragraph>
                In charge of branding and website development for <Anchor href='http://www.parkbluesky.com' target='_blank' className='link'>Blue Sky Airport Parking</Anchor> in 2011, I made it my mission to change how people view airport parking. I wanted to prove that Blue Sky could be both a friendly and profitable business. To engage our target audience and convert competitors' customers, I decided that we needed to be authentic. We shared helpful news and tips for our customers and launched fun giveaway contests. Blue Sky now has over 21,000 Facebook likes (for a single parking lot!).
              </Paragraph>

              <Heading tag='h4' strong>
                Why Leanplum?
              </Heading>
              <Paragraph>
                Mobile is how everyone connects to each other - across the world, across cultures. I'm fascinated by what motivates people and how to engage people in today's modern age where there is so much stimulation. How do we create something meaningful that builds on top of the platform that technology provides us with in order to stay connected and stay human?
              </Paragraph>
            </Box>
          </Columns>
        </Section>
      </Section>
    )
  }
}

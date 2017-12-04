import React from 'react'

import Heading from 'grommet/components/Heading'
import Anchor from 'grommet/components/Anchor'
import Section from 'grommet/components/Section'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'

import CardImage1 from '../assets/projects/the-petite-life.png'
import CardImage2 from '../assets/projects/globalxplorer.png'
import CardImage3 from '../assets/projects/brew-guru.jpg'
import CardImage4 from '../assets/projects/dishonored2.png'
import CardImage5 from '../assets/projects/blue-sky.png'
import CardImage6 from '../assets/projects/douglas-allred-company.png'
import CardImage7 from '../assets/projects/boulder-movement-collective.png'
import CardImage8 from '../assets/projects/earthecho.png'

export default class Projects extends React.Component {
  render() {
    return (
      <Section
        full
        pad='medium'
        align='center'
      >
        <Heading tag='h1'>
          <strong>Projects</strong>
        </Heading>
        <Tiles
          flush={false}
          pad='medium'
          justify='center'
        >
          <Tile>
            <Anchor target='_blank' href='http://www.thepetitelife.com'>
              <Card thumbnail={CardImage1}
                heading='The Petite Life'
                description='A community for petite people (Ruby on Rails).' />
            </Anchor>
          </Tile>
          <Tile>
            <Anchor target='_blank' href='http://www.globalxplorer.org'>
              <Card thumbnail={CardImage2}
                heading='GlobalXplorer'
                description='Web app for using satellite imagery to save human history (React).' />
            </Anchor>
          </Tile>
          <Tile>
            <Anchor target='_blank' href='https://www.homebrewersassociation.org/brew-guru/'>
              <Card thumbnail={CardImage3}
                heading='Brew Guru'
                description='Mobile app for the American Homebrewers Association (Ionic/Cordova/Angular 2).' />
            </Anchor>
          </Tile>
          <Tile>
            <Anchor target='_blank' href='http://dishonored.bethesda.net/trial'>
              <Card thumbnail={CardImage4}
                heading='Dishonored 2'
                description='Free Trial for Bethesda game (Laravel).' />
            </Anchor>
          </Tile>
          <Tile>
            <Anchor target='_blank' href='http://www.parkbluesky.com'>
              <Card thumbnail={CardImage5}
                heading='Blue Sky'
                description='Managed branding and website development for Blue Sky Airport Parking.' />
            </Anchor>
          </Tile>
          <Tile>
            <Anchor target='_blank' href='http://www.douglasallredco.com'>
              <Card thumbnail={CardImage6}
                heading='Douglas Allred Company'
                description='Managed redesign of website and print brochure.' />
            </Anchor>
          </Tile>
          <Tile>
            <Anchor target='_blank' href='http://www.bouldermovementcollective.com'>
              <Card thumbnail={CardImage7}
                heading='Boulder Movement Collective'
                description='Strength and mobility gym website (Squarespace and Front Desk).' />
            </Anchor>
          </Tile>
          <Tile>
            <Anchor target='_blank' href='http://www.earthecho.org'>
              <Card thumbnail={CardImage8}
                heading='EarthEcho'
                description='Legacy homepage redesign for a non-profit focused on inspiring a sustainable future (ExpressionEngine).' />
            </Anchor>
          </Tile>
        </Tiles>
      </Section>
    )
  }
}

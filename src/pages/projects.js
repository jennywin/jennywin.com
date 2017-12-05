import React from 'react'

import Heading from 'grommet/components/Heading'
import Anchor from 'grommet/components/Anchor'
import Section from 'grommet/components/Section'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'
import Image from 'grommet/components/Image'

import { ProjectsData } from '../data/projects.js'

export default class Projects extends React.Component {
  renderProjectTiles() {
    return ProjectsData.projects.map(project => {
      return (
        <Tile separator='all'>
          <Anchor target='_blank' href={project.url}>
            <Card thumbnail={<Image src={project.thumbnail} fit='contain' />}
              heading={project.name}
              description={project.description} />
          </Anchor>
        </Tile>
      )
    })
  }

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
          responsive
        >
          {this.renderProjectTiles()}
        </Tiles>
      </Section>
    )
  }
}

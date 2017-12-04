import React from 'react'
import Link from 'gatsby-link'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Paragraph from 'grommet/components/Paragraph'

export default class Projects extends React.Component {
  render() {
    return (
      <Section
        full
        pad="medium"
        justify="start"
        align="center"
      >
        <Heading tag="h1">
          <strong>Projects</strong>
        </Heading>

        <Paragraph>
          Showcase projects with cards.
        </Paragraph>
      </Section>
    )
  }
}

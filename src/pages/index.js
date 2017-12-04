import React from 'react'
import Link from 'gatsby-link'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Paragraph from 'grommet/components/Paragraph'

export default class Index extends React.Component {
  render() {
    return (
      <Section
        full
        pad="medium"
        justify="start"
        align="center"
      >
        <Heading tag="h1">
          <strong>Index</strong>
        </Heading>

        <Paragraph>
          This is the home page. Put a hero here.
        </Paragraph>
      </Section>
    )
  }
}

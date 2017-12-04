import React from 'react'

import Heading from 'grommet/components/Heading'
import Section from 'grommet/components/Section'
import Paragraph from 'grommet/components/Paragraph'

export default class Contact extends React.Component {
  render() {
    return (
      <Section
        full
        pad="medium"
        justify="start"
        align="center"
      >
        <Heading tag="h1">
          <strong>Contact</strong>
        </Heading>

        <Paragraph>
          Icons for LinkedIn, GitHub, Codepen, etc.? Email address. Stuff like that.
        </Paragraph>
      </Section>
    )
  }
}

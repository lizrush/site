import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export function SparklesEmoji() {
  return (
    <StaticQuery
      query={graphql`
        query {
          headshot: file(relativePath: { eq: "sparkles.png" }) {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data.headshot.childImageSharp.fluid} />}
    />
  )
}

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export function Emoji() {
  return (
    <StaticQuery
      query={graphql`
        query {
          sparklesEmoji: file(relativePath: { eq: "sparkles.png" }) {
            childImageSharp {
              fixed(height: 80, width: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Img fixed={data.sparklesEmoji.childImageSharp.fixed} />}
    />
  )
}

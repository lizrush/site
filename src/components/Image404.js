import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export function Image404() {
  return (
    <StaticQuery
      query={graphql`
        query {
          headshot: file(relativePath: { eq: "404.png" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
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

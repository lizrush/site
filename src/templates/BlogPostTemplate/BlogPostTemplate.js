import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../Layout'
import { SEO } from '../../components/SEO'
import { InternalLink } from '../../components/InternalLink/index'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={[frontmatter.title, `liz rush`, `blog`]}
      />

      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date_published}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>

      <InternalLink to="/blog" color="pink">
        ⟵ back
      </InternalLink>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date_published(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

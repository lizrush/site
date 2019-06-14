import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout } from '../templates/Layout'
import { SEO } from '../components/SEO'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Link to="/">⟵ back</Link>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.path

          return (
            <div key={node.frontmatter.path}>
              <small>{node.frontmatter.date_published}</small>

              <h3>
                <Link to={node.frontmatter.path}>{title}</Link>
              </h3>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date_published], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date_published(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout } from '../templates/Layout'
import { SEO } from '../components/SEO'
import { InternalLink } from '../components/InternalLink'

import styles from './blog.module.scss'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <InternalLink to="/" color="pink">
          ⟵ back
        </InternalLink>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.frontmatter.path

          return (
            <div key={node.frontmatter.path} className={styles.post}>
              <span className={styles.yellowHighlight}>
                {node.frontmatter.date_published}
              </span>

              <h3>
                <Link
                  to={node.frontmatter.path}
                  className={styles.pinkUnderline}
                >
                  {title}
                </Link>
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

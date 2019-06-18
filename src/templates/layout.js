import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './layout.css'
import '../shared/shared.scss'

export function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `2.45rem 1.5rem`,
          }}
        >
          {children}
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

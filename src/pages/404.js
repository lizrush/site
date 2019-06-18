import React from 'react'
import { Link } from 'gatsby'

import { Layout } from '../templates/Layout'
import { SEO } from '../components/SEO'
import { Image404 } from '../components/Image404'

const NotFoundPage = () => (
  <div
    style={{
      backgroundColor: `#e1719e`,
      height: `100%`,
      minHeight: `100vh`,
      width: `100%`,
      color: `white`,
    }}
  >
    <Layout>
      <SEO title="404: Not found" />
      <h1>Whoops...</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>

      <p>
        <Link to="/">⟵ home</Link>
      </p>

      <Image404 />
      <Image404 />
      <Image404 />
      <Image404 />
    </Layout>
  </div>
)

export default NotFoundPage

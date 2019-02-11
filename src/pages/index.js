import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lizmrush`, `liz rush`]} />

    <h1>Hi, I'm Liz Rush.</h1>
    <p>
      I live in Seattle and I'm currently working as the{' '}
      <span class={styles.pinkHighlight}>
        Anti-Trafficking Technology Director at Seattle Against Slavery
      </span>
      .
    </p>

    <p>
      Previously, I ran a{' '}
      <span class={styles.yellowHighlight}>
        web consulting agency called Archaic Future
      </span>
      . I've also worked as an iOS developer and full-stack web developer at
      various startups.
    </p>

    <p />
  </Layout>
)

export default IndexPage

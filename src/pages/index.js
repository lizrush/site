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
      <a
        class={styles.pinkHighlight}
        href="https://www.seattleagainstslavery.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Anti-Trafficking Technology Director at Seattle Against Slavery
      </a>
      .
    </p>

    <p>
      Previously, I ran a{' '}
      <a
        class={styles.yellowHighlight}
        href="https://archaicfuture.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        web consulting agency called Archaic Future
      </a>
      . I've also worked as an iOS developer and full-stack web developer at
      various startups.
    </p>

    <p>
      You can contact me at{' '}
      <a
        class={styles.pinkHighlight}
        href="mailto:liz@lizmrush.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        liz@lizmrush.com
      </a>
    </p>
  </Layout>
)

export default IndexPage

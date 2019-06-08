import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SparkleToggle from '../components/sparkleToggle'
import Headshot from '../components/headshot'

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lizmrush`, `liz rush`]} />

    <div className={styles.gridContainer}>
      <div />
      <div className={styles.sparkles}>
        <SparkleToggle />
      </div>

      <div className={styles.imageCropper}>
        <Headshot />
      </div>

      <div className={styles.content}>
        <h1>Hi, I'm Liz Rush.</h1>
        <p>
          I live in Seattle and I'm currently working as the{' '}
          <a
            className={styles.pinkHighlight}
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
            className={styles.yellowHighlight}
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
            className={styles.pinkHighlight}
            href="mailto:liz@lizmrush.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            liz@lizmrush.com
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

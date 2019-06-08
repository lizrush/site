import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SparkleToggle from '../components/sparkleToggle'
import Headshot from '../components/headshot'
import Link from '../components/link'

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lizmrush`, `liz rush`]} />

    <div className={styles.gridContainer}>
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
          <Link color="pink" href="https://www.seattleagainstslavery.org">
            Anti-Trafficking Technology Director at Seattle Against Slavery
          </Link>
          .
        </p>

        <p>
          Previously, I ran a{' '}
          <Link color="yellow" href="https://archaicfuture.com">
            web consulting agency called Archaic Future
          </Link>
          . I've also worked as an iOS developer and full-stack web developer at
          various startups.
        </p>

        <p>
          You can contact me at{' '}
          <Link color="pink" href="mailto:liz@lizmrush.com">
            liz@lizmrush.com
          </Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage

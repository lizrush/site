import React from 'react'

import { ExternalLink } from '../components/ExternalLink'
import { InternalLink } from '../components/InternalLink'
import { Headshot } from '../components/Headshot'
import { Layout } from '../templates/Layout'
import { SEO } from '../components/SEO'
import { Sparkles } from '../components/Sparkles'
import styles from './index.module.scss'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`lizmrush`, `liz rush`]} />

      <div className={styles.gridContainer}>
        <Sparkles />

        <div className={styles.imageCropper}>
          <Headshot />
        </div>

        <div className={styles.content}>
          <h1>Hi, I'm Liz Rush.</h1>
          <p>
            I live in Seattle and I'm currently working as the{' '}
            <ExternalLink
              color="pink"
              href="https://www.seattleagainstslavery.org"
            >
              Anti-Trafficking Technology Director at Seattle Against Slavery
            </ExternalLink>
            .
          </p>

          <p>
            Previously, I ran a{' '}
            <ExternalLink color="yellow" href="https://archaicfuture.com">
              web consulting agency called Archaic Future
            </ExternalLink>
            . I've also worked as an iOS developer and full-stack web developer
            at various startups.
          </p>

          <p>
            I serve on the{' '}
            <ExternalLink
              color="pink"
              href="http://www.adadevelopersacademy.org/"
            >
              Ada Developers Academy
            </ExternalLink>{' '}
            Board of Advisors.
          </p>

          <p>
            You can contact me at{' '}
            <ExternalLink color="yellow" href="mailto:liz@lizmrush.com">
              liz@lizmrush.com
            </ExternalLink>
            .
          </p>

          <InternalLink color="pink" to="/blog">
            blog posts ⟶
          </InternalLink>
        </div>
      </div>
    </Layout>
  )
}

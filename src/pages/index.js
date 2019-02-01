import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`lizmrush`, `liz rush`]} />
    <p>
      Hello. You've hit a placeholder site while I migrate my old site from
      Ghost on DigitalOcean to Gatsby on Github Pages.
    </p>
    <p>
      Please note that if you have landed on this site in search of Ada related
      content, I am in the process of deciding if I will permanently retire that
      part of my old site and it might not re-appear here.
    </p>
    <p>In the meantime, look at this picture of my cats:</p>

    <Image />
  </Layout>
)

export default IndexPage

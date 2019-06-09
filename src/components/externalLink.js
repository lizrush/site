import React from 'react'

import styles from './externalLink.module.scss'

export default class ExternalLink extends React.Component {
  render() {
    const { children, color, href } = this.props

    return (
      <a
        className={styles[color]}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  }
}

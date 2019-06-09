import React from 'react'

import styles from './externalLink.module.scss'

export const ExternalLink = ({ color, ...props }) => {
  return (
    <a
      className={styles[color]}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  )
}

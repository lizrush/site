import React from 'react'
import styles from './styles.module.scss'

export function ExternalLink({ color, children, ...props }) {
  return (
    <a
      className={styles[color]}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
}

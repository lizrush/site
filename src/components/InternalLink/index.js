import React from 'react'
import { Link } from 'gatsby'

import styles from './styles.module.scss'

export function InternalLink({ color, children, ...props }) {
  return (
    <Link className={styles[color]} {...props}>
      {children}
    </Link>
  )
}

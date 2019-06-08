import React from 'react'

import styles from './link.module.scss'

export default class Link extends React.Component {
  constructor(props) {
    super(props)
    this.text = props.children
    this.href = props.href
    this.color = props.color
  }

  render() {
    return (
      <a
        className={styles[this.color]}
        href={this.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {this.text}
      </a>
    )
  }
}

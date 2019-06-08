import React from 'react'

import Sparkles from './sparkles'

import styles from './sparkleToggle.module.scss'

export default class SparkleToggle extends React.Component {
  state = { sparklesOn: true }

  render() {
    const showSparkles = this.state.sparklesOn

    return (
      <>
        <button
          className={styles.sparkleToggle}
          onClick={this.handleToggleClick}
        >
          ✨
        </button>

        {showSparkles && <Sparkles />}
      </>
    )
  }

  handleToggleClick = () => {
    this.setState({ sparklesOn: !this.state.sparklesOn })
  }
}

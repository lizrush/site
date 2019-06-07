import React from 'react'

import Sparkles from './sparkles'

export default class SparkleToggle extends React.Component {
  state = { sparklesOn: true }

  render() {
    const showSparkles = this.state.sparklesOn

    return (
      <>
        <button className="sparkleToggle" onClick={this.handleToggleClick}>
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

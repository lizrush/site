import React from 'react'
import { Star } from './Star'
import { sparkles, off, fade, refresh } from './constants'
import styles from './styles.module.scss'

export class Animator extends React.Component {
  steps = new Int16Array(sparkles).fill(off)
  progress = 0

  shouldComponentUpdate(nextProps) {
    if (this.props.x !== nextProps.x || this.props.y !== nextProps.y) {
      this.enableOneStar()
    }

    return false
  }

  componentDidMount() {
    this.id = requestAnimationFrame(this.animate)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.id)
  }

  render() {
    return <div className={styles.animator}>{this.stars}</div>
  }

  animate = timestamp => {
    if (timestamp - this.progress > refresh) {
      this.progress = timestamp
      this.step()
      this.forceUpdate()
    }

    this.id = requestAnimationFrame(this.animate)
  }

  step() {
    for (let i = 0; i < this.steps.length; i++) {
      if (this.steps[i] > off) {
        this.steps[i]--
      }
    }
  }

  enableOneStar() {
    const index = this.steps.indexOf(off)
    if (index >= 0) {
      this.steps[index] = fade
    }
  }

  get stars() {
    const stars = []

    for (let i = 0; i < this.steps.length; i++) {
      if (this.steps[i] <= off) {
        continue
      }

      stars.push(
        <Star
          key={i}
          step={this.steps[i]}
          dispose={() => {
            this.steps[i] = off
          }}
          n={i}
          x={this.props.x}
          y={this.props.y}
        />
      )
    }

    return stars
  }
}

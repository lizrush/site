import React from 'react'
import { Star } from './Star'
import { sparkles, off, fade, refresh } from './constants'

export class Sparkles extends React.Component {
  steps = new Int16Array(sparkles).fill(off)
  x = this.props.x
  y = this.props.y
  progress = 0

  shouldComponentUpdate() {
    return false
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove)
    this.id = requestAnimationFrame(this.animate)
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.id)
    document.removeEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove = event => {
    this.setMousePosition(event)
    this.enableOneStar()
  }

  render() {
    return <>{this.stars}</>
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

  setMousePosition(event) {
    this.x = event.x + window.pageXOffset
    this.y = event.y + window.pageYOffset
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
          x={this.x}
          y={this.y}
        />
      )
    }

    return stars
  }
}

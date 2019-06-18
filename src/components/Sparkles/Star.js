import React from 'react'
import { fade, off } from './constants'
import styles from './styles.module.scss'

export class Star extends React.Component {
  constructor(props) {
    super(props)
    this.reset()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.step !== nextProps.step
  }

  componentDidUpdate() {
    if (this.isOff) {
      this.reset()
      return
    }

    this.adjustPosition()
    this.maybeDispose()
  }

  render() {
    if (this.isOff) {
      return null
    }

    if (this.props.step > fade / 2) {
      return this.star
    }

    return this.tinyStar
  }

  get star() {
    return (
      <div
        className={styles.star}
        style={{
          clip:
            this.props.step > (3 * fade) / 4
              ? 'rect(0, 5px, 5px, 0)'
              : 'rect(1px, 4px, 4px, 1px)',
          left: `${this.left}px`,
          top: `${this.top}px`,
        }}
      >
        <div
          className={styles.horizontalStarLine}
          style={this.backgroundColor}
        ></div>
        <div
          className={styles.verticalStarLine}
          style={this.backgroundColor}
        ></div>
      </div>
    )
  }

  get tinyStar() {
    const dim = this.props.step <= fade / 4 ? '1px' : '2px'

    return (
      <div
        className={styles.tinyStar}
        style={{
          ...this.backgroundColor,
          height: dim,
          left: `${this.left}px`,
          top: `${this.top}px`,
          width: dim,
        }}
      />
    )
  }

  reset() {
    this.color = getRandomColor()
    this.left = this.props.x
    this.top = this.props.y + 1
  }

  adjustPosition() {
    this.top += this.topAdjustment
    this.left += this.leftAdjustment
  }

  maybeDispose() {
    if (this.isOutOfBounds) {
      this.props.dispose()
    }
  }

  get isOutOfBounds() {
    return (
      this.top > window.innerHeight ||
      this.left > window.innerWidth ||
      this.top < 0 ||
      this.left < 0
    )
  }

  get topAdjustment() {
    const jitter = Math.random() * 3
    return 1 + jitter
  }

  get leftAdjustment() {
    const float = ((this.props.n % 10) - 2) / 5
    const wave = Math.sin((Math.random() / 2 + this.props.step) / 8)
    const widen =
      (this.props.step + Math.random() * 3) / (fade + Math.random() * 3)

    return float + wave * widen
  }

  get isOff() {
    return this.props.step <= off || this.isOutOfBounds
  }

  get backgroundColor() {
    return {
      backgroundColor: this.color,
    }
  }
}

function getRandomColor() {
  const c = []
  c[0] = 255
  c[1] = Math.floor(Math.random() * 256)
  c[2] = Math.floor(Math.random() * (256 - c[1] / 2))
  c.sort(() => 0.5 - Math.random())
  return `rgb(${c.join(',')})`
}

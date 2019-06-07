import React from 'react'
import { cloneDeep } from 'lodash'

const colour = 'random' // "random" can be replaced with any valid colour ie: "red"...
const sparkles = 100 // increase of decrease for number of sparkles falling

export default class Sparkles extends React.Component {
  state = {
    tiny: times(sparkles, () => ({
      position: 'absolute',
      overflow: 'hidden',
      height: '3px',
      width: '3px',
      visibility: 'hidden',
      zIndex: '999',
    })),
    star: times(sparkles, () => ({
      backgroundColor: 'transparent',
      position: 'absolute',
      overflow: 'hidden',
      height: '5px',
      width: '5px',
      visibility: 'hidden',
      zIndex: '999',
      left: '0',
      top: '0',
      horizontalLine: {
        position: 'absolute',
        overflow: 'hidden',
        height: '1px',
        width: '5px',
        top: '2px',
        left: '0',
      },
      verticalLine: {
        position: 'absolute',
        overflow: 'hidden',
        height: '5px',
        width: '1px',
        top: '0px',
        left: '2px',
      },
    })),
    starv: times(sparkles, () => 0),
    starx: [],
    stary: [],
    tinyx: [],
    tinyy: [],
    tinyv: times(sparkles, () => 0),
    ox: 400,
    oy: 400,
    x: 0,
    y: 0,
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove)
    this.id = setInterval(this.sparkle, 40)
    this.sparkle()
  }

  componentWillUnmount() {
    document.removeEventListener(this.onMouseMove)
    clearInterval(this.id)
  }

  onMouseMove = event => {
    this.setState({
      y: event.y + window.pageYOffset,
      x: event.x + window.pageXOffset,
    })
  }

  render() {
    const { tiny, star } = this.state
    return (
      <>
        {tiny.map((style, i) => (
          <div key={i} style={style} />
        ))}
        {star.map(({ horizontalLine, verticalLine, ...style }, i) => (
          <div key={i} style={style}>
            <div style={horizontalLine} />
            <div style={verticalLine} />
          </div>
        ))}
      </>
    )
  }

  sparkle = () => {
    const newState = cloneDeep(this.state)

    const {
      x,
      y,
      ox,
      oy,
      star,
      starv,
      starx,
      stary,
      tiny,
      tinyx,
      tinyy,
      tinyv,
    } = newState

    if (Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) {
      newState.ox = x
      newState.oy = y
      for (let c = 0; c < sparkles; c++) {
        if (!starv[c]) {
          starx[c] = x
          stary[c] = y + 1
          star[c].left = `${starx[c]}px`
          star[c].top = `${stary[c]}px`
          star[c].clip = 'rect(0px, 5px, 5px, 0px)'
          star[c].horizontalLine.backgroundColor = star[
            c
          ].verticalLine.backgroundColor =
            colour === 'random' ? newColour() : colour
          star[c].visibility = 'visible'
          starv[c] = 50
          break
        }
      }
    }

    for (let i = 0; i < sparkles; i++) {
      if (starv[i]) {
        if (--starv[i] === 25) {
          star[i].clip = 'rect(1px, 4px, 4px, 1px)'
        }

        if (starv[i]) {
          stary[i] += 1 + Math.random() * 3
          starx[i] += ((i % 5) - 2) / 5

          if (stary[i] < window.innerHeight + window.pageYOffset) {
            star[i].top = `${stary[i]}px`
            star[i].left = `${starx[i]}px`
          } else {
            star[i].visibility = 'hidden'
            starv[i] = 0
          }
        } else {
          tinyv[i] = 50
          tinyy[i] = stary[i]
          tinyx[i] = starx[i]
          tiny[i].top = `${tinyy[i]}px`
          tiny[i].left = `${tinyx[i]}px`
          tiny[i].width = '2px'
          tiny[i].height = '2px'
          tiny[i].backgroundColor = star[i].horizontalLine.backgroundColor
          star[i].visibility = 'hidden'
          tiny[i].visibility = 'visible'
        }
      }

      if (tinyv[i]) {
        if (--tinyv[i] === 25) {
          tiny[i].width = '1px'
          tiny[i].height = '1px'
        }
        if (tinyv[i]) {
          tinyy[i] += 1 + Math.random() * 3
          tinyx[i] += ((i % 5) - 2) / 5
          if (tinyy[i] < window.innerHeight + window.pageYOffset) {
            tiny[i].top = `${tinyy[i]}px`
            tiny[i].left = `${tinyx[i]}px`
          } else {
            tiny[i].visibility = 'hidden'
            tinyv[i] = 0
          }
        } else {
          tiny[i].visibility = 'hidden'
        }
      }
    }

    this.setState(newState)
  }
}

function times(n, f) {
  const r = []
  for (let i = 0; i < n; i++) {
    r.push(f(i))
  }
  return r
}

function newColour() {
  var c = []
  c[0] = 255
  c[1] = Math.floor(Math.random() * 256)
  c[2] = Math.floor(Math.random() * (256 - c[1] / 2))
  c.sort(() => 0.5 - Math.random())
  return `rgb(${c.join(',')})`
}

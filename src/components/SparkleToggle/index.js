import React, { useState } from 'react'
import { Sparkles } from '../Sparkles'
import styles from './styles.module.scss'

import { SparklesEmoji } from './SparklesEmoji'

export function SparkleToggle() {
  const [showSparkles, setShowSparkles] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <>
      <button
        alt="Toggle sparkles"
        className={
          showSparkles ? styles.sparkleToggleOn : styles.sparkleToggleOff
        }
        onClick={event => {
          setX(event.pageX)
          setY(event.pageY)
          setShowSparkles(!showSparkles)
        }}
      >
        <SparklesEmoji />
      </button>

      {showSparkles && <Sparkles x={x} y={y} />}
    </>
  )
}

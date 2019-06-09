import React, { useState } from 'react'
import { Sparkles } from '../Sparkles'
import styles from './styles.module.scss'

export function SparkleToggle() {
  const [showSparkles, setShowSparkles] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <>
      <button
        className={styles.sparkleToggle}
        onClick={event => {
          setX(event.pageX)
          setY(event.pageY)
          setShowSparkles(!showSparkles)
        }}
      >
        ✨
      </button>

      {showSparkles && <Sparkles x={x} y={y} />}
    </>
  )
}

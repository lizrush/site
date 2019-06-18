import React from 'react'
import MediaQuery from 'react-responsive'

import { Toggle } from './Toggle'
import { Falling } from './Falling'
import { MouseTracking } from './MouseTracking'
import styles from './styles.module.scss'

export function Sparkles() {
  return (
    <div aria-hidden className={styles.sparkles}>
      <MediaQuery query="(pointer: fine)">
        <Toggle>{(x, y) => <MouseTracking x={x} y={y} />}</Toggle>
      </MediaQuery>

      <MediaQuery query="(pointer: coarse), (pointer: none)">
        <Falling />
      </MediaQuery>
    </div>
  )
}

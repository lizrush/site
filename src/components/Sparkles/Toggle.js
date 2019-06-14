import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Emoji } from './Emoji'

export function Toggle({ children }) {
  const [show, setShow] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <>
      <button
        className={show ? styles.toggleOn : styles.toggleOff}
        onClick={event => {
          setX(event.pageX)
          setY(event.pageY)
          setShow(!show)
        }}
      >
        <Emoji />
      </button>

      {show && children(x, y)}
    </>
  )
}

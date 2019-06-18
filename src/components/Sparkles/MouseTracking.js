import React, { useEffect, useState } from 'react'
import { Animator } from './Animator'

export function MouseTracking(props) {
  const [x, setX] = useState(props.x)
  const [y, setY] = useState(props.y)

  useEffect(() => {
    function onMouseMove(event) {
      setX(event.x + window.pageXOffset)
      setY(event.y + window.pageYOffset)
    }

    document.addEventListener('mousemove', onMouseMove)

    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return <Animator x={x} y={y} />
}

import React, { useEffect, useState } from 'react'
import { Animator } from './Animator'

export function Falling() {
  const [x, setX] = useState(0)

  useEffect(() => {
    let id

    function updateX() {
      setX(Math.random() * window.innerWidth)
      id = requestAnimationFrame(updateX)
    }

    id = requestAnimationFrame(updateX)

    return () => cancelAnimationFrame(id)
  }, [])

  return <Animator x={x} y={0} />
}

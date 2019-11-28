import React, { useState } from 'react'

export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount)

  return(
    <div>
      <button onClick={_ => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={_ => setCount(prevCount => prevCount + 1)}>+</button>
  </div>
  )
}
import React from 'react';
import Counter from './Counter.js'
import CounterHooks from './CounterHooks.js'

function App() {
  return (
    <>
      Counter
      <Counter initialCount={0} />
      <br></br>
      CounterHooks
      <CounterHooks initialCount={0} />
    </>
  )

}

export default App;

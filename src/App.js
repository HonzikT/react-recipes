import React, { useState } from 'react';
import Counter from './Counter.js'
import CounterHooks from './CounterHooks.js'

export const ThemeContext = React.createContext()


function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      <br></br>
      CounterHooks
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>ToggleTheme</button>
    </ThemeContext.Provider>
  )

}

export default App;

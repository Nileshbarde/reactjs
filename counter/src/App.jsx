import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1)
  }

  const minusValue = () => {
    // counter = counter - 1;
    setCounter(counter - 1)
  }
  

  return (
    <>
      <h1>Create React App</h1>
      <h2>Counter: {counter}</h2>

      <button
      onClick={addValue}
      >
         Add {counter}
      </button>
      <br />
      
      <button
      onClick={minusValue}
      >
        Minus {counter}
      </button>
    </>
  )
}

export default App

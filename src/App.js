import { useState } from 'react'
import './App.css'
import UseEffectExample from './components/UseEffectExample'
import UseStateExample from './components/UseStateExample'

// LET'S ADD A STATE TO THIS FUNCTIONAL COMPONENT! WE'LL USE REACT HOOKS

// REACT HOOKS RULES:
// 1) USE REACT HOOKS JUST IN FUNCTIONAL COMPONENTS!
// 2) USE REACT HOOKS AT THE TOP LEVEL OF YOUR COMPONENT, BEFORE THE RETURN
// STATEMENT AND OUTSIDE OF ANY OTHER LOOP, FUNCTION, CONDITION

function App() {
  // in a class component, it will look like this:
  // state = {
  //   counter: 0,
  //   isLoading: true
  //   reservations: []
  // }

  // right here!
  // counter in this case is the STATE VARIABLE (like a state property in a state object)
  // setCounter is the ONLY WAY to update counter
  const [counter, setCounter] = useState(100)
  const [isLoading, setIsLoading] = useState(true)
  const [reservations, setReservations] = useState([])
  // I'm not using directly these 2, it's just for demostrating the
  // finnicky devTools panel with hooks

  return (
    <div className="App">
      <UseEffectExample />
      <UseStateExample />
      <header className="App-header" style={{ flexDirection: 'row' }}>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </header>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
// useEffect takes care of the Lifecycle features in a functional component

// the rules of hooks are always the same!
// 1) use useEffect just in a react functional component
// 2) use useEffect just at the top level

const UseEffectExample = () => {
  // let's write our useEffects here!
  // useEffect can mimic different class lifecycle methods:
  // - componentDidMount
  // - componentDidUpdate
  // - componentWillUnmount (which we didn't cover)

  const [counter, setCounter] = useState(10)

  useEffect(() => {
    console.log('this component just mounted!')
  }, [])
  // 1 million $$$ question: what is the dependencies Array?
  // the deps array is an array of values: whenever even ONE of those values
  // change, the callback will be called AGAIN

  return (
    <div>
      <h3 onClick={() => setCounter(counter + 1)}>
        useEffect example! Welcome :D
      </h3>
      <p>{counter}</p>
    </div>
  )
}

export default UseEffectExample

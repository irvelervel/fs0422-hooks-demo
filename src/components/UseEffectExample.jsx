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
  const [name, setName] = useState('Stefano')

  //   useEffect(() => {
  //     console.log('the component got an update!')
  //     // setCounter(counter + 1)
  //   })
  // 1 million $$$ question: what is the dependencies Array?
  // the deps array is an array of values: whenever even ONE of those values
  // change, the callback will be called AGAIN
  // known this, let's try to list down the most used signatures for useEffect:

  // COMPONENTDIDMOUNT REPLACEMENT:
  useEffect(() => {
    console.log('this is a replacement for componentDidMount!')
  }, [])

  // GENERIC COMPONENTDIDUPDATE REPLACEMENT (not recommended):
  useEffect(() => {
    console.log(
      'this is going to be called at every update, like componentDidUpdate!'
    )
  })

  // COMPONENTDIDUPDATE THAT TRIGGERS JUST WHEN 1 STATE PROPERTY CHANGES:
  useEffect(() => {
    console.log('name changed!')
  }, [name])

  return (
    <div>
      <h3 onClick={() => setCounter(counter + 1)}>
        useEffect example! Welcome :D
      </h3>
      <p>{counter}</p>
      <p onClick={() => setName('Eric')}>{name}</p>
    </div>
  )
}

export default UseEffectExample

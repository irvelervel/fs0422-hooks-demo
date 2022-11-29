import { useState } from 'react'

const UseStateExample = () => {
  // hooks go here!
  const [name, setName] = useState('Adam')

  if (10 > 5) {
    console.log('well, of course this happens')
  }
  //   const [teacher, setTeacher] = useState('Stefano')
  // if you even try to put the above useState into a condition that might even
  // be never unmet, your code breaks :(

  return (
    <div>
      <h3>Current name is: {name}</h3>
      <button onClick={() => setName(name === 'Adam' ? 'Eve' : 'Adam')}>
        {/* setName accepts a string, the new value for 'name' */}
        Change Name
      </button>
    </div>
  )
}

export default UseStateExample

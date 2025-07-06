import React, {useState} from 'react'

function Counter(){

  const [counter, setCounter] = useState(0);
  
  const addCounter = () => {
    setCounter(counter + 1);
  }

  const resetCounter = () => {
    setCounter(0)
  }

  const subCounter = () => {
    setCounter(counter - 1);
  }

  return(
    <>
    <p>Counter:{counter}</p>
    <button onClick={addCounter}>+</button>
    <button onClick={resetCounter}>Reset</button>
    <button onClick={subCounter}>-</button>
    </>
  )
}

export default Counter;
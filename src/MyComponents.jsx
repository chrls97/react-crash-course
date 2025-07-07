import react, {useState} from 'react';


// updater function = A function passed an argument to setState() usually .ex setYear(arrow function)
//                    Allow for safe updates based on the previous state updates and asynchronous function
//                    Good practice to use updater functions


function MyComponents() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {

    // Takes the PENDING state to calculate NEXT State
    // React puts your updater function in a queue (waiting line)
    // During the next render, it will call them in same

    setCounter(c => c + 1);
    setCounter(c => c + 1);
    setCounter(c => c + 1);
  }

  const decrementHandler = () => {
    if(counter != 0)
    setCounter(c => c - 1);
    setCounter(c => c - 1);
    setCounter(c => c - 1);
  }

  const resetHandler = () => {
    setCounter(0)
  }


  return(
    <>  
      <p>Count :{counter}</p>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={incrementHandler}>Increment</button>
    </>
  )
}

export default MyComponents;
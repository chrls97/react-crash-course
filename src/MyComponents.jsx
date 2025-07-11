import React, {useState, useEffect} from 'react';
// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

const MyComponents = () => {

  //EXAMPLE 1

  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState("green");

  // useEffect(() => {
  //   document.title=`Count: ${count} ${color}`
  // }, [count, color])

  // const addCount = () => {
  //   setCount(c => c + 1)
  // }

  // const subCount = () => {
  //   setCount(c => c - 1)
  // }

  // const changeColor = () => {
  //   setColor(c => c === "green" ? "red":"green")
  // }


  // EXAMPLE 2 Check width and height
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

     

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []); // Empty dependency array means this runs only on mount


  useEffect(() => {
    document.title = `Size width:${width}px and height:${height}px`;
  }, [width, height])

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  
 

  return (
    <div>
      {/* 
      EXAMPLE 1
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button> 
      */}


      <p>Widht:{width}px</p>
      <p>Height:{height}px</p>


    </div>
  )
}

export default MyComponents

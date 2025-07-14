// Use Ref
// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
// When you want a component to "remember" some information,
// but you don't want that information to trigger new renders.

// Common use cases:
// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React, { useState, useEffect, useRef} from 'react';

const MyComponent = () => {

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);


  useEffect(() => {
    console.log("Component Render");
  })

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  }


  const handleClick3 = () => {
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  }


  return (
    <>
      <div>
        <button onClick={handleClick1}>Click Me</button>
        <input type="text" ref={inputRef1} />
      </div>

      <div>
        <button onClick={handleClick2}>Click Me</button>
        <input type="text" ref={inputRef2} />
      </div>

      <div>
        <button onClick={handleClick3}>Click Me</button>
        <input type="text" ref={inputRef3} />
      </div>


    </>
  )
}

export default MyComponent

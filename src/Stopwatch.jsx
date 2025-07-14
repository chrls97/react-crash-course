// Import necessary React hooks and functions
import React, { useState, useEffect, useRef } from 'react';

// Define the Stopwatch component
const Stopwatch = () => {
  // State to track if stopwatch is running
  const [isRunning, setIsRunning] = useState(false);
  // State to track elapsed time in milliseconds
  const [elapseTime, setElapseTime] = useState(0);
  // State to store recorded lap times
  const [recordedTimes, setRecordedTimes] = useState([]);
  // Ref to store interval ID for cleanup
  const intervalIdRef = useRef(null);
  // Ref to store the start time of the stopwatch
  const startTimeRef = useRef(0);

  // Effect hook that runs when isRunning state changes
  useEffect(() => {
    if(isRunning){
      // Set up an interval that updates elapsed time every 10ms
      intervalIdRef.current = setInterval(() => {
        // Calculate elapsed time (current time - start time)
        setElapseTime(Date.now() - startTimeRef.current);
      }, 10);

      // Cleanup function to clear interval when component unmounts or isRunning changes
      return() => {
        clearInterval(intervalIdRef.current);
      }
    }
  }, [isRunning]);  // Dependency array - effect runs when isRunning changes

  // Function to start the stopwatch
  const start = () => {
    setIsRunning(true);
    // Set start time to current time minus any previously elapsed time
    // (allows for pausing/resuming)
    startTimeRef.current = Date.now() - elapseTime;
  }

  // Function to stop the stopwatch
  const stop = () => {
    setIsRunning(false);
  }

  // Function to reset the stopwatch
  const reset = () => {
    setElapseTime(0);        // Reset elapsed time to 0
    setIsRunning(false);     // Ensure stopwatch is stopped
    setRecordedTimes([]);    // Clear all recorded times
  }

  // Function to record current time
  const recordTime = () => {
    // Add current formatted time to recordedTimes array
    setRecordedTimes(r => [...r, formatTime()]);
  }

  // Function to format elapsed time into MM:SS:MS
  const formatTime = () => {
    // Calculate hours, minutes, seconds, and milliseconds from elapsed time
    let hours = Math.floor(elapseTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapseTime / (1000) % 60);
    let milliseconds = Math.floor((elapseTime % 1000) / 10);

    // Pad numbers with leading zeros for consistent formatting
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Return formatted time string (showing minutes, seconds, and milliseconds)
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  // Component JSX
  return (
   <>
    <div className='stopwatch'>
      {/* Display area for current time */}
      <div className='display'>
        <span>{formatTime()}</span>
      </div>
      {/* Control buttons */}
      <div className='controls'> 
        <button onClick={start} className='start-button'>Start</button>
        <button onClick={stop} className='stop-button'>Stop</button>
        <button onClick={reset} className='reset-button'>Reset</button>
        {/* Record button is disabled when stopwatch isn't running */}
        <button onClick={recordTime} className='reset-button' id='recordTime' disabled={!isRunning}>Record</button>
      </div>

      {/* Display area for recorded times */}
      <div className='recorded-time'>
        <span>Record Time</span>
        {/* List of recorded times */}
        {recordedTimes.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </div>
    </div>
   </>
  )
}

// Export the component for use in other files
export default Stopwatch;
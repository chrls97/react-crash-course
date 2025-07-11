import React, {useState, useEffect} from 'react';

const DigitalClock = () => {

  const [time, setTime] = useState(new Date());

  // to set new Date on setTime every
  useEffect(() => { 
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return() => {
      //setInterval and clearInterval is js function
      clearInterval(intervalId)
    }
  },[])

  //formating time
  const formatTime = () =>{
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return(`${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}${meridiem}`);
  }

  // to add zero on the number less than 10
  const addZero = (number) => {
    if(number < 10){
      return(`0${number}`)
    }else{
      return(number)
    }
  }

  const formatDate = () =>{
    //To format to month name
    let months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    let monthName = months[time.getMonth()];
    let day = time.getDay();
    let fullYear = time.getFullYear();

    return(`${monthName} ${addZero(day)}, ${fullYear}`)
  }


  



  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{formatDate()}</span><br/>
        <span className='time'>{formatTime()}</span>
      </div>
    </div>
  )
}

export default DigitalClock


function Button(){

 
  //  let count = 0;
  // const handleClick= (name) => {
  //   if(count < 3){
  //     count++;
  //     console.log(`${name} you click me ${count} time/s`)
  //   }else{
  //     console.log(`${name} stop clicking me`)
  //   }
  // }

  //events handler
  const handleClick = (a) => {
    a.target.textContent = "Ouch"
  }



  // add arrow function on click to not invoke from the start the click function
  return(
    <>
      
      <button onClick={(a) => handleClick(a)}>Click Me! </button>
    </>
  )
}

export default Button;


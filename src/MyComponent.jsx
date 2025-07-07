import React, { useState } from 'react';


function MyComponent(){
                      // Use state with objects
  const [car, setCar] = useState({year:2024,
                                  brand: "Ford",
                                  model: "Mustang"});
  
  const carHandler = () =>{
    setCar({year:2025, brand:"Honda", model:"Civic"})
  }

  const carYearHandler = (e) => {
    setCar(c => ({...c, year:e.target.value}))
  }

  const carBrandHandler = (e) => {
    setCar(c => ({...c, brand:e.target.value}))
  }

  const carModelHandler = (e) => {
    setCar(c => ({...c, model:e.target.value}))
  }
  

  return(
    <>
      <p>Your Favorite Car is: {car.year}  {car.brand} {car.model} </p>
      <input type="number" value={car.year} onChange={carYearHandler} /><br />
      <input type="text" value={car.brand} onChange={carBrandHandler} /><br />
      <input type="text" value={car.model} onChange={carModelHandler}/>
    </>
  )
}

export default MyComponent;

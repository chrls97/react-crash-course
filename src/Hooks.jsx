import React, {useState} from 'react'


function Hooks(){

  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(0);
  const [employed, setEmployed] = useState(false)

  const updateName = () =>{
    setName("Charles Lennard Amon")
  }

  const incrementAge = () =>{
    if (age < 10)
      setAge(age + 1)
    else
      alert("cannot add anymore")
  }

  const isEmployed = () => {
    setEmployed(!employed)
  }





  return(
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment age</button>

      <p>Employed: {employed ? "Employed" : "Not Employed"}</p>
      <button onClick={isEmployed}>Increment age</button>
    </>
  );
}

export default Hooks;
import React, {useContext} from 'react';
import ComponentD from './ComponentD';

//imported Context
import {UserContext} from './ComponentA'

const ComponentC = () => {

  const user = useContext(UserContext);

  return (
    <div className='box'>
      <h1>Component C</h1>
      <h2>Hello Again {user}</h2>
      <ComponentD />
    </div>
  )
}

export default ComponentC

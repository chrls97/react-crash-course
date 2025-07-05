// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value/>

import Student from './Student/Student.jsx';

function App() {
  return (
    <>
      <Student name="Charles Lennard Amon" age={27} isStudent={false}/>
      <Student name="Ann Jerica Martinez" age={27} isStudent={true}/>
    </>
    
    
  )
}

export default App

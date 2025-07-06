
import List from './List/List.jsx';

function App() {


  const fruits = [{id:1, name: "apple", calories: 95},
                  {id:2, name: "orange", calories: 45},
                  {id:3, name: "banana", calories: 105},
                  {id:4, name: "coconut", calories: 159},
                  {id:5, name: "pineaple", calories: 37}];

  const vegatables = [{id:6, name: "onion", calories: 25},
                  {id:7, name: "carrot", calories: 10},
                  {id:8, name: "cabbage", calories: 36},
                  {id:9, name: "eggplant", calories: 35},
                  {id:10, name: "nuts", calories: 40}];

  return (
    <>
      <List items={fruits} category="Fruits"/>
      <List items={vegatables} category="Vegetables"/>
    </>
  )
}

export default App

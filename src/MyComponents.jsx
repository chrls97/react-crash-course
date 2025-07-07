import React, {useState} from 'react'

const MyComponents = () => {

  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);


  const addFoodHandler = () => {
    const newFood = document.getElementById('foodInput').value;
    document.getElementById('foodInput').value = '';
    setFoods(f => ([...f, newFood]))
  }

  const removeFoodHandler = (index) => {
    setFoods(foods.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) =>
        <li key={index} onClick={() => removeFoodHandler(index)}>
          <u>{food}</u>
        </li>)}
      </ul>
      <input type="text" id="foodInput" placeholder='Enter Food'/>
      <button onClick={addFoodHandler}>Enter</button>
    </div>
  )
}

export default MyComponents

import styles from './List.module.css'

function List(props){

  const items = props.items;
  const category = props.category;
                  
  //sorting object with specific properties
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  //fruits.sort((a, b) => a.calories - b.calories) // NUMERICAL 
  //fruits.sort((a, b) => b.calories - a.calories) // REVERSE NUMERICAL

  //Fileteing Fruis Object with specific properties
  //const lowCaloriesFruits = fruits.filter(fruit => fruit.calories < 100)
  //const highCaloriesFruits = fruits.filter(fruit => fruit.calories > 100)
  //const listItems = highCaloriesFruits.map(highCaloriesFruit => <li key={highCaloriesFruit.id}>{highCaloriesFruit.name}: <b>{highCaloriesFruit.calories}</b></li>)

  //posting of object using map
  // In React, the .map() method is a JavaScript array function used to iterate over an array and return a new array of transformed or rendered elements. It's commonly used to:
  // its like for each
  const listItems = items.map(item => 
                              <li key={item.id}>{item.name}: <b>{item.calories}</b></li>)

  return(
    <>
      <h3 className={styles.listCategory}>{category}</h3>
      <ol className={styles.listItems}>{listItems}</ol>
    </>
  )

}

export default List;
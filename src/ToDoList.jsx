import React, { useState } from 'react'

const ToDoList = () => {

  const [tasks, setTasks] = useState(["Eat Breakfast","Take a Showe", "Walk the Dog"]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if(newTask != ''){
      setTasks(t => [...t, newTask]);
      setNewTask('');
    }else{
      alert('Please enter inputs');
     
    }
    
  }

  const deleteTask = (index) => {
    //deleting task by index
    setTasks(tasks.filter((_,i) => i !== index))
  }

  const moveTaskUp = (index) => {

    if(index > 0){
      const updatedTasks = [...tasks];
      //Array Destructuring
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      //Array Destructuring
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }

  return (
    <>
      <div className="to-do-list">
        <h2>To-Do-List</h2>

        <input type="text" placeholder='Enter Task...' id='newTask' value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add Task</button>


        <ol>
          {tasks.map((task,index) => 
            <li key={index}>
              <span className='text'>{task}</span> 
              <button className='delete-button' onClick={() => deleteTask(index)}>D</button>
              <button className='up-button' onClick={() => moveTaskUp(index)}>U</button>
              <button className='down-button' onClick={() => moveTaskDown(index)}>D</button>
            </li>
          )}
        </ol>
      </div>
    </>
  )
}

export default ToDoList

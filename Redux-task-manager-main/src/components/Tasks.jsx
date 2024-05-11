import React from 'react'
import Task from "./Task";
import { useSelector, useDispatch } from 'react-redux';

const Tasks = () => {
  
  const tasksState = useSelector((state) => state.tasksReducer);
  const query = useSelector((state) => state.queryReducer);
  
  let tasks = tasksState.tasks;
  
  if(query != "")
  {
    tasks = tasks.filter(task => task.text.includes(query));
  }
  
  return (
    <>
      <ul id="task-list">
        {tasks.map(task => (
          <Task key={task.id} task={task}/>
        ))}
      </ul>
    </>
  )
}

export default Tasks
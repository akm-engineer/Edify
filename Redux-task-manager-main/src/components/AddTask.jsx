import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAddTaskAction } from '../redux/actions';

const AddTask = () => {

  const tasksState = useSelector((state) => state.tasksReducer);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    if (e.key !== "Enter") return;
    if (task == "") return;
    dispatch(getAddTaskAction(task));
    setTask("");
  }

  return (
    <>
      <input type="text" name="task" id='add-task-box' placeholder="Add New Task" value={task} onChange={handleChange} onKeyDown={handleSubmit} />
    </>
  )
}

export default AddTask
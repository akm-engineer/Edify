import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTask, updateSearchTerm } from "../redux/actions";
import FilterButon from "./FilterButon";
import TaskList from "./TaskList";

const Task = () => {
  const [newTask, setNewTask] = useState("");
  const [searchTask, setSearchTask] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = (text) => {
    dispatch(addTask(text));
  };

  const handleAddTaskClick = () => {
    if (newTask.trim() !== "") {
      handleAddTask(newTask.trim());
      setNewTask("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTask(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Task Manager
      </h2>
      <div className="flex items-center mb-4">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Task"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTaskClick}
        >
          <BsPlus size={20} />
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButon />
        <div className="flex items-center mb-4">
          <input
            value={searchTask}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Task"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      <TaskList />
    </div>
  );
};

export default Task;

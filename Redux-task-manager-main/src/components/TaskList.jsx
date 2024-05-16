import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const filteredTask = useSelector((state) => {
    const tasks = state.tasks;
    const filter = state.filter;
    const searchTask = state.searchTask;

    return tasks.filter((task) => {
      const matchesFilter =
        (filter === "COMPLETED" && task.completed) ||
        (filter === "INCOMPLETE" && !task.completed) ||
        filter === "ALL";

      const matchesSearch = task.text.toLowerCase().includes(searchTask);

      return matchesFilter && matchesSearch;
    });
  });
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTask.map((task, index) => (
        <TaskItem key={index} task={task} index={index} />
      ))}
    </ul>
  );
};

export default TaskList;

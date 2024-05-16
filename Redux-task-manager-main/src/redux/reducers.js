/* eslint-disable no-case-declarations */
import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASK,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  TOGGLE_TASK,
  UPDATE_SEARCH,
} from "./actionType";

const initialState = {
  tasks: [],
  searchTask: "",
  filter: "ALL",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchTask: state.searchTask,
      };
    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task, index) =>
          index === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        ),
        filter: state.filter,
        searchTask: state.searchTask,
      };
    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task, index) => index !== action.payload.id),
        filter: state.filter,
        searchTask: state.searchTask,
      };
    case MARK_COMPLETED:
      return {
        tasks: state.tasks.map((task, index) =>
          index === action.payload.id ? { ...task, completed: true } : task
        ),
        filter: state.filter,
        searchTask: state.searchTask,
      };

    case MARK_INCOMPLETE:
      return {
        tasks: state.tasks.map((task, index) =>
          index === action.payload.id ? { ...task, completed: false } : task
        ),
        filter: state.filter,
        searchTask: state.searchTask,
      };

    case FILTER_TASK:
      return {
        tasks: state.tasks,
        filter: action.payload.filter,
        searchTask: state.searchTask,
      };

    case UPDATE_SEARCH:
      return {
        ...state,
        searchTask: action.payload.searchTask,
      };
    case MARK_ALL_COMPLETED:
      return {
        tasks: state.tasks.map((task) => ({ ...task, completed: true })),
        filter: state.filter,
        searchTask: state.searchTask,
      };

    default:
      return state;
  }
};

export default taskReducer;

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

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: { text },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const removeTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTask = (filter) => ({
  type: FILTER_TASK,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTask) => ({
  type: UPDATE_SEARCH,
  payload: { searchTask },
});

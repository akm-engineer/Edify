export const getAddTaskAction = (text) => {
  return { type: "ADD_TASK", payload: text }
}

export const getDeleteTaskAction = (id) => {
  return {type: "DELETE_TASK", payload: {id}}
}

export const getToggleTaskStatusAction = (id) => {
  return {type: "TOGGLE_TASK_STATUS", payload: {id}}
}

export const getSetQueryAction = (query) => {
  return {type: "SET_QUERY", payload: query}
}


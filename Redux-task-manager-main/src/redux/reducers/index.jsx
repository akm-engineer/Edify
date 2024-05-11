import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import queryReducer from "./queryReducer";

const rootReducer = combineReducers({
  tasksReducer,
  queryReducer
});

export default rootReducer;
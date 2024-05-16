import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";

import Task from "./components/Task";

function App() {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  );
}

export default App;

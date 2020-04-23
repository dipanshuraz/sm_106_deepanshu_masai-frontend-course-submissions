import React from "react";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;

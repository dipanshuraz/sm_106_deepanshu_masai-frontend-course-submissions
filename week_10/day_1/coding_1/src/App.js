import React, { Component } from "react";
import Task from "./components/Task";
import Task1 from "./components/Task1";

export class App extends Component {
  render() {
    return (
      <div>
        <Task />
        <Task1 />
      </div>
    );
  }
}

export default App;

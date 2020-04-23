import React, { Component } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Slack from "./Components/Web/Slack";
import Cart from "./Components/Product/Cart";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login /> */}
        {/* <Cart /> */}
        <Slack />
      </div>
    );
  }
}

export default App;

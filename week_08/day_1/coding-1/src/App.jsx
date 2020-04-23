import React from "react";
import "./App.css";
import List1 from "./components/list1";
import List2 from "./components/list2";
import Btn from "./components/btn";
import Card from "./components/card";

function App() {
  // JSX
  // return <div className="App">Hello</div>;
  // BTS JSX
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hello My name is Deepanshu ")
  // );
  return (
    <div className="App m-5">
      <List1 />
      <List2 />
      <div className="container">
        <Btn />
      </div>
      <Card />
    </div>
  );
}

export default App;

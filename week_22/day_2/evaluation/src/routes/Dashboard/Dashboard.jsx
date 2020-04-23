import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../Home";

export class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="container"></div>
        <Route path="/" render={() => <Home />} />
      </>
    );
  }
}

export default Dashboard;

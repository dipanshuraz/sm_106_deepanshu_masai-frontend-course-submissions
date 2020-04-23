import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/auth/Login.jsx";
import AddTopic from "../Components/AddTopic.jsx";
import ViewTopic from "../Components/common/ViewTopics";
import Edit from "../Components/Edit";

export class Routes extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link className="p-3 d-inline-block" to="/">
            Home
          </Link>
          <Link className="p-3 d-inline-block" to="/add">
            Add Topic
          </Link>
          <Link className="p-3 d-inline-block" to="/view">
            View Topic
          </Link>
          <Link className="p-3 d-inline-block" to="/login">
            Login
          </Link>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddTopic} />
        <Route path="/view" component={ViewTopic} />
        <Route path="/login" component={Login} />
        <Route path="/edit:id" component={Edit} />
      </div>
    );
  }
}

export default Routes;

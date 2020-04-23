import React, { Component } from "react";
import Form from "./Form.jsx";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "admin",
      pass: "admin"
    };
  }

  render() {
    return (
      <div>
        <Form email={this.state.email} pass={this.state.pass} />
      </div>
    );
  }
}

export default Login;

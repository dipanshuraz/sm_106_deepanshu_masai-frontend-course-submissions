import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/auth/action";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  logUser = e => {
    e.preventDefault();
    const { loginUser } = this.props;
    loginUser(this.state);
  };

  render() {
    return (
      <div className="container-fluid mt-4 bg-svg2">
        <div className="container">

          <h1 className="text-center mt-2">Login Form</h1>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div class="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    name="username"
                    value={this.username}
                    onChange={this.handleInput}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    name="password"
                    value={this.password}
                    onChange={this.handleInput}
                  />
                </div>

                <button
                  onClick={this.logUser}
                  type="submit"
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginUser: payload => loginUser(payload)
};

export default connect(null, mapDispatchToProps)(Login);

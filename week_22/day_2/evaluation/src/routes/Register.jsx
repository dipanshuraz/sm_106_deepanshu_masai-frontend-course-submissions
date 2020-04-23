import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
import { regUser } from "../redux/authentication/actions";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description: ""
    };
  }

  handleInputs = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerUser = e => {
    e.preventDefault();
    const { regUser } = this.props;
    regUser(this.state);
  };

  render() {
    return (
      <div className="container-fluid bg-svg3">
        <div className="container ">
          <h1 className="text-center mt-5">Sign Up Form</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    name="name"
                    onChange={this.handleInputs}
                    value={this.state.name}
                  />
                </div>
                <div class="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    class="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    name="email"
                    onChange={this.handleInputs}
                    value={this.state.email}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    name="password"
                    onChange={this.handleInputs}
                    value={this.state.password}
                  />
                </div>
                <div class="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    name="username"
                    onChange={this.handleInputs}
                    value={this.state.username}
                  />
                </div>
                <div class="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    name="mobile"
                    onChange={this.handleInputs}
                    value={this.state.mobile}
                  />
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    aria-describedby="emailHelp"
                    name="description"
                    onChange={this.handleInputs}
                    value={this.state.description}
                  />
                </div>
                <button
                  onClick={this.registerUser}
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
  regUser: payload => regUser(payload)
};

export default connect(null, mapDispatchToProps)(Register);

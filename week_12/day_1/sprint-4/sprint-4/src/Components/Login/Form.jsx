import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: "",
      status: false
    };
  }
  emailHandler = e => {
    this.setState({ email: e.target.value });
  };
  passHandler = e => {
    console.log(e.target.value);
    this.setState({ pass: e.target.value });
  };
  authenticate = e => {
    e.preventDefault();
    if (
      this.props.email === this.state.email &&
      this.props.pass === this.state.pass
    ) {
      this.setState({
        status: true
      });
    }
  };
  render() {
    let status;
    if (this.state.status) {
      status = (
        <div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 rounded p-5 my-5 border border-dark ">
              <p>SIGN-IN SUCCESSFUL</p>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      );
    } else {
      status = (
        <div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 rounded p-5 my-5 border border-dark ">
              <pre>
                Email : admin <p>Pass : admin</p>
              </pre>
              <h1 className="p-2">Login : </h1>
              <form>
                <div class="form-group">
                  <label>Email address</label>
                  <input
                    value={this.state.email}
                    onChange={this.emailHandler}
                    type="text"
                    class="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    value={this.state.pass}
                    onChange={this.passHandler}
                    type="password"
                    class="form-control"
                    id="passInput"
                  ></input>
                </div>

                <button
                  type="submit"
                  class="w-25 btn btn-outline-dark"
                  onClick={this.authenticate}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      );
    }
    return <div className="container  ">{status}</div>;
  }
}

export default Form;

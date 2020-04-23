import React, { Component } from "react";
import { Container, Box, Button, Input } from "@material-ui/core";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  email = React.createRef();
  pass = React.createRef();

  checkUser = () => {
    // console.log(this.email.current.value, );
    let obj = {
      email: this.email.current.value,
      pass: this.pass.current.value
    };
    this.props.click(obj);
  };

  render() {
    return this.props.isAuth ? (
      <Redirect to="/" />
    ) : (
      <div className="container  w-50 my-5">
        <div className="row  mx-1 my-2">
          <div className="col-md d-flex justify-content-center m-5">
            <Container>
              <h2 className="text-center">Login</h2>
              <Box>
                <Input
                  className="p-2 m-2"
                  fullWidth
                  type="text"
                  inputRef={this.email}
                  placeholder="Email"
                  color="secondary"
                ></Input>
              </Box>
              <Box>
                <Input
                  fullWidth
                  className="p-2 m-2"
                  inputRef={this.pass}
                  type="password"
                  color="secondary"
                  placeholder="Password"
                ></Input>
              </Box>
              <Box>
                <Button
                  fullWidth
                  className="p-2 m-2"
                  onClick={this.checkUser}
                  variant="outlined"
                  color="secondary"
                >
                  Login
                </Button>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

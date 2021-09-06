import "./login.css";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isEmailFilled: false,
      isPasswordFilled: false,
      exampleEmail: "",
      examplePassword: "",
      emailvaliderror: ""
    };
  }

  emailChange = value => {
    this.setState({ isEmailFilled: true, exampleEmail: value.target.value });
  };

  passwordChange = value => {
    this.setState({
      isPasswordFilled: true,
      examplePassword: value.target.value
    });
  };

  loginClickHandler = e => {
    if (
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.exampleEmail)
    ) {
      this.getLoginData();
    } else {
      this.setState({ emailvaliderror: "Email has wrong format" });
    }
  };

  getLoginData = () => {
    var session_url = "https://subscribe-carly.drivemycar.me/api/Login";
    var username = this.state.exampleEmail;
    var password = this.state.examplePassword;
    axios
      .post(session_url, { id: username, pw: password })
      .then(response => {
        console.log("Logged In succesfully " + response.data.userName);
      })
      .catch(error => {
        console.log("Error in Login");
      });
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              onChange={this.emailChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              onChange={this.passwordChange}
            />
          </FormGroup>
        </Form>
        {(this.state.exampleEmail === "" ||
          this.state.examplePassword === "") && (
          <div class="lottieBtn">
            <Button variant="primary" size="lg" disabled>
              Login
            </Button>{" "}
          </div>
        )}
        {this.state.exampleEmail !== "" && this.state.examplePassword !== "" && (
          <div class="lottieBtn">
            <Button
              variant="primary"
              size="lg"
              enabled="true"
              onClick={this.loginClickHandler}
            >
              Login
            </Button>{" "}
          </div>
        )}

        <p class="account forgot">
          <a href="/login">Forgot password?</a>
        </p>
        <p class="account sign_up">
          Don't have an account?&nbsp;
          <a href="/login" class="">
            Sign up
          </a>
        </p>
      </div>
    );
  }
}

export default Login;

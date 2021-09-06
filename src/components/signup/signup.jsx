import "./signup.css";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      isEmailFilled: false,
      isPasswordFilled: false,
      exampleEmail: "",
      examplePassword: ""
    };
  }
  emailChange = (value) => {
    this.setState({ isEmailFilled: true, exampleEmail: value.target.value });
  };

  passwordChange = (value) => {
    this.setState({
      isPasswordFilled: true,
      examplePassword: value.target.value
    });
  };

  loginClickHandler = (e) => {
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
      .then((response) => {
        console.log("Logged In succesfully " + response.data.userName);
      })
      .catch((error) => {
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
            <Label for="examplePassword">Create Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              onChange={this.passwordChange}
            />
          </FormGroup>
        </Form>
        <p className="tcTxt">
          By signing up, you agree to Carly's website{" "}
          <a
            href="https://www.carly.co/website-terms-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms &amp; Conditions
          </a>
          and
          <a
            href="https://www.carly.coprivacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </p>
        {(this.state.exampleEmail === "" ||
          this.state.examplePassword === "") && (
          <div className="lottieBtn">
            <Button variant="primary" size="lg" disabled>
              Sign Up
            </Button>{" "}
          </div>
        )}
        {this.state.exampleEmail !== "" && this.state.examplePassword !== "" && (
          <div className="lottieBtn">
            <Button
              variant="primary"
              size="lg"
              enabled="true"
              onClick={this.loginClickHandler}
            >
              Sign Up
            </Button>{" "}
          </div>
        )}

        <p className="account">
          Already have an account?&nbsp;
          <a href="/login" className="">
            Log in
          </a>
        </p>
      </div>
    );
  }
}

export default Signup;

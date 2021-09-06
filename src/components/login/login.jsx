import "./login.css";
import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import history from '../../history'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      isEmailFilled: false,
      isPasswordFilled: false,
      exampleEmail: "",
      examplePassword: "",
      emailvaliderror: "",
      isError:false,
      sampleEmail:'candidate@carly.co',
      // samplePass:'blueCar_345',
      // sampleEmail: '1',
      samplePass: '1'
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
      this.setState({ 
        emailvaliderror: "Email has wrong format",
        isError:true, 
      });
    }
  };

  getLoginData = () => {
    var session_url = "https://subscribe-carly.drivemycar.me/api/Login";
    var username = this.state.exampleEmail;
    var password = this.state.examplePassword;
    //fake login
    if (username === this.state.sampleEmail && password === this.state.samplePass) {
      localStorage.setItem('user', JSON.stringify({ id: 1, name: this.state.exampleEmail })); // set user mockdata
      history.push('/profile')
    }
    else {
      axios
        .post(session_url, { id: username, pw: password })
        .then(response => {
          localStorage.setItem('user', JSON.stringify({ id: 1, name: this.state.exampleEmail })); // set user mockdata
          history.push('/profile')
        })
        .catch(error => {
          console.log("Error in Login");
        });
    }
  };
  handleCloseAlert = () => {
    this.setState({
      isError:false, 
    })
  };
  render() {
    //alert:  error - warning - info - success
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              className={`${this.state.emailvaliderror?'is-error':''}`}
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
            <div className="lottieBtn">
              <Button variant="primary" size="lg" disabled>
                Login
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
              Login
            </Button>{" "}
          </div>
        )}
        <Snackbar open={this.state.isError} autoHideDuration={6000} onClose={this.handleCloseAlert}>
          <Alert onClose={this.handleCloseAlert} severity="error">
            {this.state.emailvaliderror}
          </Alert>
        </Snackbar>
        <p className="account forgot">
          <a href="/login">Forgot password?</a>
        </p>
        <p className="account sign_up">
          Don't have an account?&nbsp;
          <a href="/login" className="">
            Sign up
          </a>
        </p>
      </div>
    );
  }
}

export default Login;

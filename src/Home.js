import React, { Component } from "react";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Common from "./components/common/common";
import "./index.css";
//clear test user storage
localStorage.removeItem('user')
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      signUp: true,
      login: false,
      activeSignUptabName: "tabActive",
      activeSignuptab: "active",
      activeLogintabName: "",
      activeLogintab: ""
    };
  }

  handleClickLogin = e => {
    e.preventDefault();
    this.setState({
      login: true,
      signUp: false,
      activeSignUptabName: "",
      activeSignuptab: "",
      activeLogintabName: "tabActive",
      activeLogintab: "active"
    });
  };

  handleClickSignUp = e => {
    e.preventDefault();
    this.setState({
      signUp: true,
      login: false,
      activeSignUptabName: "tabActive",
      activeSignuptab: "active",
      activeLogintabName: "",
      activeLogintab: ""
    });
  };

  render() {
    return (
      <div className="Login">
        <div className="tabContainer">
          <ul>
            <li className={this.state.activeSignUptabName}>
              <span
                className={this.state.activeSignuptab}
                href="/signup"
                onClick={this.handleClickSignUp}
              >
                New to Carly?
              </span>
            </li>
            <li className={this.state.activeLogintabName}>
              <span
                className={this.state.activeLogintab}
                href="/login"
                onClick={this.handleClickLogin}
              >
                Log In
              </span>
            </li>
          </ul>
          {this.state.signUp && (
            <div>
              <Common
                displayText="Continue with.."
                signHeaderText="Or Log In with your email"
                passwordLabel="Create Password"
              />
              <Signup />{" "}
            </div>
          )}
          {this.state.login && (
            <div>
              {" "}
              <Common
                displayText="Login with.."
                signHeaderText="Or Sign Up with your email"
                passwordLabel="Password"
              />{" "}
              <Login />{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}

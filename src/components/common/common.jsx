import React, { Component } from "react";
import { Form } from "reactstrap";

import "./common.css";

class Common extends Component {
  render() {
    return (
      <div>
        <div>
          <p class="signTxt">{this.props.displayText}</p>
          <div class="clear">
            <button class="FacebookButton">
              <img src="./images/Icon_Facebook.png" alt="Facebook" />
              FACEBOOK
            </button>
            <div>
              <button class="GoogleButton">
                <img src="./images/Icon_Google.png" alt="Google" />
                GOOGLE
              </button>
            </div>
          </div>
          <p class="signBodyTxt">
            We will never share any of your data or post anything on your
            behalf.
          </p>
          <hr />
          <Form>
            <p class="signHeader">{this.props.signHeaderText}</p>
          </Form>
        </div>
      </div>
    );
  }
}
export default Common;

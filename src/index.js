import "./index.css";
import React, { useEffect, Suspense } from 'react'
import ReactDOM from "react-dom";
import { Router, Route, Redirect } from 'react-router-dom'
import { Switch } from 'react-router'
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import history from "./history";
ReactDOM.render(
  <Router history={history}>
    <Suspense fallback={<div>Loading... </div>}>
      <App />
    </Suspense>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

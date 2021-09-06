import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";

import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
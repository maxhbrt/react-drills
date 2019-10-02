import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://www.warrenphotographic.co.uk/photography/bigs/30159-Ginger-cat-white-background.jpg"}/>
      </div>
    );
  }
}

export default App;

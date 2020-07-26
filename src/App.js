import React, { Component } from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/Home";


class App extends Component {
  

  handleCartView= ()=>{

    
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home/>
      </div>
    );
  }
}

export default App;

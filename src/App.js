import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      cardArray: [1,2,3,4,5,6,7,8,9,10]
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container card-columns">
          {this.state.cardArray.map(a=> <Cards id={a} />)}
        </div>
      </div>
    );
  }
}

export default App;



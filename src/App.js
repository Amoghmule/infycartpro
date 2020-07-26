import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default App;

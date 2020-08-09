import React, { Component } from "react";
import Category from "./Category";
import Cards from "./Cards";
import './Home.css'

class Home extends Component {
    


  render() {
    return (
      <div className="container-fluid" id="home">
        <h3>Our items</h3>
        <div class="row">
          <Category className="col position-fixed" id="categories" />
          <Cards className="col "/>
        </div>
      </div>
    );
  }
}

export default Home;

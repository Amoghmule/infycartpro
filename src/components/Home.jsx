import React, { Component } from "react";
import Category from "./Category";
import Cards from "./Cards";
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cardArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
      }


  render() {
    return (
      <div className="container-fluid" id="home">
        <h3>Our items</h3>
        <div class="row">
          <Category className="col" id="categories" />
          <div className="card-columns col" id="cards">
            {this.state.cardArray.map((a) => (
              <Cards id={a} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

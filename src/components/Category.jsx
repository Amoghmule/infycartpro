/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-header stretched-link pointer" onClick={this.handle}> All Categories</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item stretched-link pointer">Bread</li>
          <li class="list-group-item stretched-link pointer">Milk</li>
          <li class="list-group-item stretched-link pointer">Snacks</li>
        </ul>
      </div>
    );
  }
}

export default Category;

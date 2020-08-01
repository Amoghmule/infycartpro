/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Card from './Card';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }


  render() {
    return (
      <div className="card-columns col" id="cards">
      {this.state.cardArray.map((a) => (
        <Card id={a} />
      ))}
    </div>
    );
  }
}

export default Cards;

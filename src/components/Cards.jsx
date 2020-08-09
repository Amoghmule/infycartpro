/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Card from './Card';
import Data from './data.json';

class Cards extends Component {
  


  render() {
    return (
      <div className="card-deck col" id="cards">
      {Data.map((data) => (
        <Card card={data} />
      ))}
    </div>
    );
  }
}

export default Cards;

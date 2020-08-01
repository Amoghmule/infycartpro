/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

class Card extends Component {
    
    render() { 
        return (
            <div className="card border-primary" style={{ width: "18rem" ,height:"18rem"}}>
            <img className="card-img-top" src={this.props.src} />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
    
              <a href="#" className="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          );
    }
}
 
export default Card;
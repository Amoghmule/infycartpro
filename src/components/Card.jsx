/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

class Card extends Component {

    
    
    render() { 

      const {src,title,text }=this.props.card;
        return (
            <div className="card border-primary" style={{ width: "18rem" }}>
            <img className="card-img-top" src={src} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{text}</p>
    
              <a href="#" className="btn btn-warning">
                Add to Cart
              </a>
            </div>
          </div>
          );
    }
}
 
export default Card;
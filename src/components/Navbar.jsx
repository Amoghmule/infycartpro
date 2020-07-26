/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top  navbar-expand-md navbar-dark bg-dark">
        <a href="#" className="navbar-brand">
          Chocolate Factory
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center">
            <Link to="/">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            </Link>

            <Link to="/cart">
            <li className="nav-item">
              <a className="nav-link"  href="#">
                Cart{" "}
                <i class="fa fa-envelope-o">
                  <span class="badge badge-primary">11</span>
                </i>
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

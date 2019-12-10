import React, { Component } from "react";
// import * as actions from "../actions/actions";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button, Overlay } from "react-bootstrap";
import ShowDates from './showDates'

class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <a className="nav-link" href="/">
                <img src="https://i.imgur.com/fZ0FLrd.jpg?1" alt="type-t img" height="50" width="125" ></img><span className="sr-only">(current)</span></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </ul>
          </div>
          <div>
            < ShowDates />
          </div>
          <a href='/newPost'><Button variant="outline-info mr-2 float-right" size="md">Add Reading</Button></a>

        </nav>
      </div>
    )
  }

}

export default Navbar
import React, { Component } from "react";
// import * as actions from "../actions/actions";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ChooseDays from './dayPicker'

class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      showWeekPicker: false
    }

    this.showWeekPicker = this.toggleWeekPicker.bind(this)
  }

  toggleWeekPicker = e => {
    e.preventDefauly()
    this.setState({
      showWeekPicker: !this.state.showWeekPicker
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg">
          <a className="navbar-brand" href="#">Type T</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
          {/* <div>< ChooseDays /></div> */}
          <a href='/newPost'><Button variant="outline-info mr-4 float-right" size="md">Add Reading</Button></a>

        </nav>
      </div>
    )
  }

}

export default Navbar
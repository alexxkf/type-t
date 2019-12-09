import React, { Component } from "react";
// import * as actions from "../actions/actions";
import { connect } from "react-redux";
import Modal from './modal';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
          <button onClick={this.toggleModal}>
            Add New Reading
        </button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            `Here's some content for the modal`
        </Modal>
        </nav>
      </div>

    )
  }

}

export default Navbar
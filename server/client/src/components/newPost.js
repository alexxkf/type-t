import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../actions/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./newPost.css";
import 'bootstrap/dist/css/bootstrap.min.css';


class NewPost extends Component {
  constructor() {
    super()

    this.state = {
      bgl: '',
      date: new Date
    }
    // onChange = e => {
    //   this.setState({ [e.target.bgl]: e.target.value })
    // }

  }


  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      //pressing enter should have the same functionality as calling onSubmit()
      this.onSubmit(e)
    }
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4 className="text-center">Add New Reading</h4>
            <form
              name="addPost"
              onSubmit={this.onSubmit}
              onKeyPress={this.handleKeyPress}
              className="col-md-6 offset-md-3"
            >
              <input
                label="BGL"
                name="New BGL"
                placeholder="Enter New BGL"
              />
              <br>
              </br>
              <br>
              </br>
              <DatePicker
                type="text"
                placeholder="Entry Date"
                selected={this.state.startDate}
                onChange={this.handleChange}
                style={{ 'text-align': 'center' }}
              />
              <br>
              </br>
              <br>
              </br>
              <div>
                <a href='/'><Button variant="outline-danger mr-2" size="sm">Cancel</Button></a>
                <Button type="submit" variant="outline-info mr-2" size="sm">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const mapStateToProps = (state) => {
  return state
}

export default (connect(mapStateToProps, mapDispatchToProps)(NewPost));
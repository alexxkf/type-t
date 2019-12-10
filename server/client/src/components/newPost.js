import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import "../App.css";
import { Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../actions/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
    const { onSubmit } = this.props;
    return (
      <div>
        <h4 className="text-center">Add New Reading</h4>
        <div className="col-md-6 offset-md-3">
          <div className="row">
            <form
              name="addPost"
              onSubmit={this.onSubmit}
              onKeyPress={this.handleKeyPress}
              className="offset-md-4"
            >
              <input
                label="BGL"
                name="New BGL"
                placeholder="Enter New Blood Glucose"
              />
              <DatePicker
                type="text"
                placeholder="Date"
                selected={this.state.startDate}
                onChange={this.handleChange}
                style={{ 'text-align': 'center' }}
              />
            </form>
            <div>
              <a href='/'><Button variant="outline-danger mr-2" size="sm">Cancel</Button></a>
              <Button type="submit" variant="outline-info mr-2" size="sm">Submit</Button>
            </div>
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

export default reduxForm({ form: 'questionNew' })(connect(mapStateToProps, mapDispatchToProps)(NewPost));
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
      insulin: '',
      startDate: ''
    }

  }

  onSubmit = e => {
    e.preventDefault();
    let newDate = '';
    let splitDate = this.state.startDate.split('-')
    newDate = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0]
    this.props.createPost({ Value: this.state.bgl, Date: newDate, Notes: this.state.insulin })
    this.props.history.push('/')
  }

  onTextChange = e => {
    this.setState({
      bgl: e.target.value,
    })
  }

  onInsulinChange = e => {
    this.setState({
      insulin: e.target.value
    })
  }


  handleChange = date => {
    this.setState({
      startDate: date.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="text-center col-md-6 offset-md-3">
            <h4>Add New Reading</h4>
            <form
              name="addPost"
              onSubmit={this.onSubmit}
              className="col-md-6 offset-md-3"
            >
              <input
                label="BGL"
                name="/bgl"
                placeholder="New BGL mg/dL"
                onChange={this.onTextChange.bind(this)}
              />
              <br>
              </br>
              <br>
              </br>
              <input
                label="insulin"
                name="/insulin"
                placeholder="Insulin units/mL"
                onChange={this.onInsulinChange.bind(this)}
              />
              <br>
              </br>
              <br>
              </br>
              <input
                type="date"
                placeholder="Entry Date"
                // selected={this.state.startDate}
                onChange={this.handleChange.bind(this)}
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
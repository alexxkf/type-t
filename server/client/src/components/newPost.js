import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { submitData } from "../actions/index";
import { Link } from 'react-router-dom';
import { Form, Col, Button, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';




class NewPost extends Component {
  constructor() {
    super()

    this.state = {
      bglValue: '',
      date: new Date(),
      carbs: [],

    }
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  }

  handleClick(values) {
    this.props.submitData(values)
  }


  render() {
    console.log('state change', this.state)
    return (
      <div className="form" style={{ 'text-align': 'center' }}>
        <h4>Add New Reading</h4>
        <div>
          <Form >
            <Form.Group controlId="formGroup">
              <Form.Label >Current Blood Glucose: </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="mg/dL"
                value={this.state.bglValue}
                onChange={(e) => { this.setState({ bglValue: e.target.value }) }}
                style={{ 'text-align': 'center', 'size': 'small' }}
              />
            </Form.Group>
            <Form.Group controlId="formGroup">
              <Form.Label>Entry Date: </Form.Label>
              <DatePicker
                type="text"
                placeholder="Date"
                selected={this.state.startDate}
                onChange={this.handleChange}
                style={{ 'text-align': 'center' }}
              />
            </Form.Group>
            {/* <Form.Group controlId="formGroup">
              <Form.Label>Food: </Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Search"
                value={this.state.carbs}
                onChange={(e) => { this.setState({ carbs: e.target.value }) }}
                style={{ 'text-align': 'center' }}
              />
            </Form.Group> */}
          </Form>
          <Link to="/">
            <Button variant="outline-info" type="button" onClick={() => this.handleClick(this.state)}>Submit</Button>
          </Link>
        </div>
      </div >
    )
  }


}

function mapStateToProps(state) {
  return { form: state.form };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ submitData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { fetchInsulinData } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './insulinGraph.css'


class InsulinGraph extends Component {

  componentDidMount() {
    this.props.fetchInsulinData()
  }

  render() {
    return (
      <div>
        <div className="container bar-style" id="bar-container">
          <Bar
            data={this.props.insulin}
            options={{
              title: {
                display: true,
                text: 'Daily Insulin Intake',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'top',
                responsive: true
              }
            }}
          />
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('redux state inside insulingraph', state)
  return { insulin: state.insulin }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchInsulinData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(InsulinGraph)
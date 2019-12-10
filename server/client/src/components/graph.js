import React, { Component } from 'react';
// import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import _ from 'lodash'
import Bubbles from './bubbles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../actions'
import './graph.css'


class Graph extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  // constructor() {
  //   super()

  //   this.state = {
  //     labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  //     datasets: [
  //       {
  //         label: 'highest',
  //         fill: false,
  //         lineTension: 0.5,
  //         backgroundColor: 'white',
  //         borderColor: '#FFCBA0',
  //         borderWidth: 2,
  //         data: [345, 234, 234, 211, 111, 123, 234]
  //       },
  //       {
  //         label: 'lowest',
  //         fill: false,
  //         lineTension: 0.5,
  //         backgroundColor: 'white',
  //         borderColor: '#7DAFB8',
  //         borderWidth: 2,
  //         data: [45, 123, 79, 45, 145, 88, 54]
  //       },
  //       {
  //         label: 'average',
  //         fill: false,
  //         lineTension: 0.5,
  //         backgroundColor: 'white',
  //         borderColor: '#B5B0AC',
  //         borderWidth: 2,
  //         data: [234, 56, 111, 87, 54, 423, 75]
  //       }
  //     ]
  //   }


  render() {
    return (
      <div>
        <div className="container graph-style" id="chart-container">
          <Line
            data={this.props.data}
            options={{
              title: {
                display: true,
                text: 'Weekly Stats',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'top'
              }
            }}
          />
          <div>
            <Bubbles />
          </div>
        </div >
      </div >
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return { data: state.data }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph)
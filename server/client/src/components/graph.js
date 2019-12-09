import React, { Component } from 'react';
// import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import _ from 'lodash'
import Bubbles from './bubbles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../actions'

// componentDidMount() {
//   this.props.fetchData()
// }


class Graph extends Component {
  constructor() {
    super()

    this.state = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'mg/dL',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 45, 23, 97, 23, 75, 23, 43, 43, 75, 45, 54, 23, 97, 54]
        },
        {
          label: 'units/mL',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [34, 76, 12, 45, 23, 43, 54, 87, 32, 32, 34, 23, 43, 76, 98, 43, 23, 34, 45]
        }
      ]
    }

  }


  render() {
    return (
      <div>
        <div className="container" id="chart-container">
          <Line
            data={this.state}
            options={{
              title: {
                display: true,
                text: 'Blood Glucose Level',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
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
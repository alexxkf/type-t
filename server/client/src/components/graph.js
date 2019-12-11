import React, { Component } from 'react';
// import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';
import _ from 'lodash'
import InsulinGraph from './insulinGraph'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData } from '../actions'
import "chartjs-plugin-annotation";
import './graph.css'


class Graph extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

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
              },
              annotation: {
                annotations: [{
                  drawTime: "beforeDatasetsDraw",
                  type: "box",
                  xScaleID: "x-axis-0",
                  yScaleID: "y-axis-0",
                  borderWidth: 0,
                  yMin: 75,
                  yMax: 150,
                  backgroundColor: 'rgba(60, 179, 113, 0.2)'
                }]
              }
            }}
          />
          <div>
            <InsulinGraph />
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
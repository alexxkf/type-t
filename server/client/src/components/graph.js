import React, { Component } from 'react';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';

class Graph extends Component {
  constructor() {
    super()

    this.state = {
      labels: ['6am', '7am', '8am'],
      datasets: [
        {
          label: 'BGL',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        },
        {
          label: 'insulin',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
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
                text: 'Average BGL',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Graph
import React, { Component } from 'react';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';

class Graph extends Component {
  constructor() {
    super()

    this.state = {
      labels: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am'],
      datasets: [
        {
          label: 'mg/dL',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 45, 23, 97, 23, 75]
        },
        {
          label: 'units/mL',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [34, 76, 12, 45, 23, 43, 54, 87, 32, 32]
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
        </div>
      </div>
    );
  }
}

export default Graph
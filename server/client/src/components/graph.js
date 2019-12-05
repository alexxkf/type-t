import React, { Component } from 'react';
import Chart from 'chart.js';
import { Line } from 'react-chartjs-2';

let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;
//--Chart Style Options--//

class Graph extends Component {
  constructor() {
    super()

    this.state = {
      labels: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm'],
      datasets: [
        {
          label: 'mg/dL',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        },
        {
          label: 'units/mL',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [23, 44, 22, 12, 97]

        }
      ],

      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 5,
            left: 15,
            right: 15,
            bottom: 15
          }
        }
      }

    }


  }


  render() {
    return (
      <div>
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
    );
  }
}

export default Graph

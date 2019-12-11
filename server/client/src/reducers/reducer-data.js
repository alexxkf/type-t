import _ from "lodash";

import { FETCH_DATA } from "../actions";
// import { FETCH_CARBS } from "../actions";

const DEFAULT_STATE = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'highest',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'white',
      borderColor: '#FFCBA0',
      borderWidth: 2,
      data: [345, 234, 234, 211, 111, 123, 234]
    },
    {
      label: 'lowest',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'white',
      borderColor: '#7DAFB8',
      borderWidth: 2,
      data: [45, 123, 79, 45, 145, 88, 54]
    },
    {
      label: 'average',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'white',
      borderColor: '#B5B0AC',
      borderWidth: 2,
      data: [234, 56, 111, 87, 54, 423, 75]
    }
  ]
}

const EMPTY_GRAPH = {
  labels: [],
  datasets: [
    {
      label: 'highest',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'white',
      borderColor: '#FFCBA0',
      borderWidth: 2,
      data: []
    },
    {
      label: 'lowest',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'white',
      borderColor: '#7DAFB8',
      borderWidth: 2,
      data: []
    },
    {
      label: 'average',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'white',
      borderColor: '#B5B0AC',
      borderWidth: 2,
      data: []
    }
  ]
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      // console.log(action.payload)
      let retObj = JSON.parse(JSON.stringify(EMPTY_GRAPH));
      let daysKeys = Object.keys(action.payload.data);

      retObj.labels = daysKeys;
      // console.log("Keys:", daysKeys)
      retObj.datasets[0].data = [];
      retObj.datasets[1].data = [];
      retObj.datasets[2].data = [];

      for (let i = 0; i < daysKeys.length; i++) {
        retObj.datasets[0].data.push(action.payload.data[daysKeys[i]].high);
        retObj.datasets[1].data.push(action.payload.data[daysKeys[i]].low);
        retObj.datasets[2].data.push(action.payload.data[daysKeys[i]].average);
      }

      retObj.labels = retObj.labels.slice(0, 7)
      retObj.datasets[0].data = retObj.datasets[0].data.slice(0, 7)
      retObj.datasets[1].data = retObj.datasets[1].data.slice(0, 7)
      retObj.datasets[2].data = retObj.datasets[2].data.slice(0, 7)

      return retObj
    default:
      return state;
  }
}
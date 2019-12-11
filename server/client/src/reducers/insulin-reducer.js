import _ from "lodash";

import { FETCH_INSULIN_DATA } from "../actions";

const STATE = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Total Insulin Intake',
      backgroundColor: 'rgba(181,176,172,0.4)',
      borderColor: 'rgba(181,176,172,0.4)',
      borderWidth: 2,
      data: [10, 8, 15, 16, 12, 20, 19]
    }
  ]
}


const EMPTY_INSULIN_GRAPH = {
  labels: [],
  datasets: [
    {
      label: 'Daily Insulin Intake',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(181,176,172,0.4)',
      borderColor: 'rgba(181,176,172,0.4)',
      borderWidth: 2,
      data: []
    }
  ]
}

export default function (state = STATE, action) {
  switch (action.type) {
    case FETCH_INSULIN_DATA:
      console.log('data received', action.payload)
      if (action.payload && action.payload.data) {
        let retObjInsulin = JSON.parse(JSON.stringify(EMPTY_INSULIN_GRAPH));
        console.log('reducer', action.payload.data)
        let daysIKeys = Object.keys(action.payload.data);

        retObjInsulin.labels = daysIKeys;
        retObjInsulin.datasets[0].data = [];

        for (let i = 0; i < daysIKeys.length; i++) {
          retObjInsulin.datasets[0].data.push(action.payload.data[daysIKeys[i]].total);
        }

        retObjInsulin.labels = retObjInsulin.labels.slice(0, 7)
        retObjInsulin.datasets[0].data = retObjInsulin.datasets[0].data.slice(0, 7)

        return retObjInsulin
      }
      return state;
    default:
      return state;
  }
}
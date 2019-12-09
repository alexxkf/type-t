import _ from "lodash";

import { FETCH_DATA } from "../actions";
import { FETCH_CARBS } from "../actions";


export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      // console.log(action.payload)
      return action.payload.data
    case FETCH_CARBS:
      return action.payload.data.id
    default:
      return state;
  }
}
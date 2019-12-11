import { combineReducers } from "redux";
import DataReducer from "./reducer-data";
import InsulinReducer from "./insulin-reducer"

const rootReducer = combineReducers({
  data: DataReducer,
  insulin: InsulinReducer
});

export default rootReducer;
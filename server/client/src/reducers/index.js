import { combineReducers } from "redux";
import DataReducer from "./reducer-data";

const rootReducer = combineReducers({
  data: DataReducer,
});

export default rootReducer;
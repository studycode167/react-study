import { combineReducers } from "redux";
import counterReducer from "./reducers";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;

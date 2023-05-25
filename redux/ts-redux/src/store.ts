import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

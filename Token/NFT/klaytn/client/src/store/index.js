import { createStore } from "redux";
import { combineReducers } from "redux";
import loading from "./loading";

const rootReducer = combineReducers({
  loading,
});

const store = createStore(rootReducer);

export default store;

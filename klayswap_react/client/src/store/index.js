import { combineReducers, createStore } from "redux";
import account from "./account";

const store = createStore(combineReducers({ account }));

export default store;

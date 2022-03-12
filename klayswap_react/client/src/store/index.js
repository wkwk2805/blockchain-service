import { combineReducers, createStore } from "redux";
import account from "./account";
import token from "./token";

const store = createStore(combineReducers({ account, token }));

export default store;

import {combineReducers, createStore} from "@reduxjs/toolkit";
import { serviceReducer } from "./reducers/serviceReducer";
import { userReducer } from "./reducers/userReducer";

const store = createStore(combineReducers({userReducer,serviceReducer}))

export default store
import { createStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";

const store = createStore(userReducer)
export default store
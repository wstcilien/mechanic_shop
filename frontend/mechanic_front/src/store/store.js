import { createStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'main-root',
    storage
}
const store = createStore()
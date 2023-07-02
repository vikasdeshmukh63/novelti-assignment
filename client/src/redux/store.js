import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice"
import phoneReducer from "./phoneSlice"
import loadingReducer from "./loadingSlice"

const store = configureStore({
    reducer:{
        user:userReducer,
        phone:phoneReducer,
        loading:loadingReducer
    }
});

export default store
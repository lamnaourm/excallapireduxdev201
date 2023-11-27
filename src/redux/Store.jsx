import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const reducer = combineReducers({
    users: UserSlice
})

const store = configureStore({reducer})

export default store
import { combineReducers } from "@reduxjs/toolkit";
import authPopup from "./slices/authPopup";

const  authReducer = combineReducers({
    authPopup: authPopup
})


export default authReducer


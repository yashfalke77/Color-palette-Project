import { combineReducers } from "@reduxjs/toolkit";
import colorsGenerate from "./slices/colorsGenerate";

const  colorsReducer = combineReducers({
    colorsGenerate
})


export default colorsReducer


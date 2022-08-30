import { combineReducers } from "redux";
import authReducer from "./authReducer";
import colorsReducer from "./colorsReducer";

const rootReducer = combineReducers({ 
    auth: authReducer,
    colors: colorsReducer
 });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

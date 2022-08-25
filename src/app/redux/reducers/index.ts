import { combineReducers } from "redux";
import collegeReducer from "./collegeReducer";

let rootReducer = combineReducers({ 
    college: collegeReducer
});

export default rootReducer;
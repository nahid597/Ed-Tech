import { combineReducers } from "redux";
import { courseDetailsReducer } from "./course/courseReducer";

const rootReducer = combineReducers({
    courseReducer: courseDetailsReducer
});

export default rootReducer;

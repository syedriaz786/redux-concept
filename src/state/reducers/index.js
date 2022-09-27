import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({     //<-- here we are combine all reducer file in one redux reducer. this combineReducer function helps to combine all reducer in one file. 
    amount: amountReducer
})
export default reducers;
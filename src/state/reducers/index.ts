import {combineReducers} from "redux";
import {employeeReducer} from "./employeeReducer";

export const reducers = combineReducers({
    employee: employeeReducer
});
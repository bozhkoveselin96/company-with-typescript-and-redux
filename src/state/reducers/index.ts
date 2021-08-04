import {combineReducers} from "redux";
import {employeeReducer} from "./employeeReducer";

export const reducers = combineReducers({
    employees: employeeReducer
});

export type State = ReturnType<typeof reducers>
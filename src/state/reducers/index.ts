import {combineReducers} from "redux";
import {employeeReducer} from "./employeeReducer";
import {taskReducer} from "./taskReducer";

export const reducers = combineReducers({
    employees: employeeReducer,
    tasks: taskReducer
});

export type State = ReturnType<typeof reducers>
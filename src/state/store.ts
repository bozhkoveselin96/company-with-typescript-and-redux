import {createStore, applyMiddleware} from "redux";
import {reducers} from "./reducers";
import thunk from "redux-thunk";
import {InitialStateType} from "./types/initialState"
import {EmployeeType} from "./types/employee";

// const initialEmployee: EmployeeType = {
//     id: 0,
//     name: "",
//     age: 0,
//     salary: 0,
//     image: "",
// };

const initialState: InitialStateType = {
    employees: {
        all: [],
        selected: {}
    }
};

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk),
);
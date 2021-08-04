import {Action} from "../actions";
import {ActionTypes} from "../types/action";
import {InitialStateType} from "../types/initialState";
import {EmployeeType} from "../types/employee";

const initialEmployee: EmployeeType = {
    id: 0,
    name: "",
    age: 0,
    salary: 0,
    image: "",
};

const initialState: InitialStateType = {
    all: [],
    selected: initialEmployee
};

export const employeeReducer = (state: InitialStateType = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_ID:
            const maxId = action.employees.reduce((prev, current) => (prev.id > current.id) ? prev : current)
            return {...state, lastId: maxId}
        case ActionTypes.GET_ALL:
            return {...state, all: action.employees}
        case ActionTypes.GET_ONE:
            return state;
        case ActionTypes.CREATE:

            return state;
        case ActionTypes.UPDATE:
            return state;
        case ActionTypes.DELETE:
            const update = state.all.filter((e) => e.id !== action.employee.id);
            return {...state, all: update}
        case ActionTypes.CHANGE_FIELD:

        default:
            return state;
    }
}
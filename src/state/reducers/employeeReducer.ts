import {Action} from "../actions";
import {ActionTypes} from "../types/action";
import {InitialStateType} from "../types/initialState";
import {Simulate} from "react-dom/test-utils";

const initialState: InitialStateType = {
    all: [],
    selected: {
        employee: {
            avatar: "",
            email: "",
            first_name: "",
            last_name: "",
            salary: ""
        },
        tasks: []
    },
};

export const employeeReducer = (state: InitialStateType = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL:
            return {...state, all: action.employees}
        case ActionTypes.GET_ONE:
            return {
                ...state,
                selected: {
                    employee: action.employee,
                    tasks: []
                }
            };
        case ActionTypes.CREATE:
        case ActionTypes.UPDATE:
            return state;
        case ActionTypes.DELETE:
            let allWithoutDeleted = state.all.filter((e) => e.id !== action.employee.id);
            return {...state, all: allWithoutDeleted}
        case ActionTypes.CHANGE_FIELD:
            return {
                ...state, selected: {
                    ...state.selected,
                    employee: {
                        ...state.selected.employee,
                        [action.change.name]: action.change.value
                    }
                }
            }
        default:
            return state;
    }
}
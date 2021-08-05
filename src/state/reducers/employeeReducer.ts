import {Action} from "../actions";
import {ActionTypes} from "../types/action";
import {InitialStateTypeEmployees} from "../types/initialState";

const initialState: InitialStateTypeEmployees = {
    allEmployees: [],
    selected: {
        employee: {},
        tasks: []
    },
};

export const employeeReducer = (state: InitialStateTypeEmployees = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL:
            return {...state, allEmployees: action.payload}
        case ActionTypes.GET_ONE:
            return state;
        case ActionTypes.CREATE:
            // const allWithNew = [...state.allEmployees, action.payload];
            // return {...state, allEmployees: allWithNew};
            return state;
        case ActionTypes.UPDATE:
            return state;
        case ActionTypes.DELETE:
            let allWithoutDeleted = state.allEmployees.filter((e) => e.id !== action.payload.id);
            return {...state, allEmployees: allWithoutDeleted}
        case ActionTypes.CHANGE_FIELD:

        default:
            return state;
    }
}
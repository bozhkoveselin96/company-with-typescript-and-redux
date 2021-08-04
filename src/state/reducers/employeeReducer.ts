import {Action} from "../actions";
import {ActionTypes} from "../types/action";

const initialState = {
    employees: {
        all: [],
        selected: {}
    }
};

export const employeeReducer = (state: {} = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL:
        case ActionTypes.GET_ONE:
        case ActionTypes.CREATE:
        case ActionTypes.UPDATE:
        case ActionTypes.DELETE:
        default:
            return state;
    }
}
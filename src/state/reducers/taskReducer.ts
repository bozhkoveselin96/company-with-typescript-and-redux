import {InitialStateTypeTasks} from "../types/initialState";
import {Action} from "../actions";

const initialState: InitialStateTypeTasks = {
    allTasks: []
};

export const taskReducer = (state: InitialStateTypeTasks = initialState, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
}
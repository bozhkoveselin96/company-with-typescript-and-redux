import {ActionTypes} from "../types/action";
import {Dispatch} from "redux";
import {Action} from "../actions";
import {ChangeFieldType} from "../types/field";
import {TaskType} from "../types/task";

export const getAllTasks = (tasks: TaskType[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_ALL,
            payload: tasks
        });
    };
};

export const getTask = (task: TaskType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_ONE,
            payload: task
        });
    };
};

export const createTask = (task: TaskType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CREATE,
            payload: task
        });
    };
};

export const updateTask = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.UPDATE,
        });
    };
};

export const deleteTask = (task: TaskType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.DELETE,
            payload: task
        });
    };
};

export const changeTaskField = (change: ChangeFieldType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CHANGE_FIELD,
            payload: change
        });
    };
};
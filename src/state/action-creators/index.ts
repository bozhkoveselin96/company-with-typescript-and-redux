import {ActionTypes} from "../types/action";
import {EmployeeType} from "../types/employee";
import {Dispatch} from "redux";
import {Action} from "../actions";

export const getAllEmployees = (employees: EmployeeType[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_ALL,
            payload: employees
        });
    };
};

export const getEmployee = (employee: EmployeeType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_ONE,
            payload: employee
        });
    };
};

export const createEmployee = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CREATE,
        });
    };
};

export const updateEmployee = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.UPDATE,
        });
    };
};

export const deleteEmployee = (employee: EmployeeType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CREATE,
            payload: employee
        });
    };
};
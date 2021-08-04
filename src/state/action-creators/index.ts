import {ActionTypes} from "../types/action";
import {EmployeeType} from "../types/employee";
import {Dispatch} from "redux";
import {Action} from "../actions";
import {EmployeeFieldType} from "../types/field";

export const updateLastId = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.UPDATE_ID,
            employees: employees
        });
    };
};

export const getAllEmployees = (employees: EmployeeType[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.GET_ALL,
            employees: employees
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

export const createEmployee = (employee: EmployeeType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CREATE,
            employee: employee
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
            type: ActionTypes.DELETE,
            employee: employee
        });
    };
};

export const changeEmployeeField = (change: EmployeeFieldType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CHANGE_FIELD,
            change: change
        });
    };
};
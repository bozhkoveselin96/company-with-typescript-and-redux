import {ActionTypes} from "../types/action";
import {EmployeeType} from "../types/employee";
import {Dispatch} from "redux";
import {Action} from "../actions";
import {ChangeFieldType} from "../types/field";

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

export const createEmployee = (employee: EmployeeType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CREATE,
            // payload: employee
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
            payload: employee
        });
    };
};

export const changeEmployeeField = (change: ChangeFieldType) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.CHANGE_FIELD,
            payload: change
        });
    };
};
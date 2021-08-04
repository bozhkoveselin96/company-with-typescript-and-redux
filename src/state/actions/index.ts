import {ActionTypes} from "../types/action";
import {EmployeeType} from "../types/employee";

interface GetAllAction {
    type: ActionTypes.GET_ALL,
    payload: EmployeeType[]
}

interface GetOneAction {
    type: ActionTypes.GET_ONE,
    payload: EmployeeType
}

interface CreateAction {
    type: ActionTypes.CREATE,
    // payload: {}
}

interface UpdateAction {
    type: ActionTypes.UPDATE,
    // payload: {}
}

interface DeleteAction {
    type: ActionTypes.DELETE,
    payload: EmployeeType
}

export type Action = GetAllAction | GetOneAction | CreateAction | UpdateAction | DeleteAction;

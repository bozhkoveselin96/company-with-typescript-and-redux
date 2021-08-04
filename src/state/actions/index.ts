import {ActionTypes} from "../types/action";
import {EmployeeType} from "../types/employee";

interface UpdateIdAction {
    type: ActionTypes.UPDATE_ID,
    employees: EmployeeType[]
}

interface GetAllAction {
    type: ActionTypes.GET_ALL,
    employees: EmployeeType[]
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
    employee: EmployeeType
}

interface ChangeFieldAction {
    employees: any;
    type: ActionTypes.CHANGE_FIELD
}

export type Action = GetAllAction | GetOneAction | CreateAction | UpdateAction | DeleteAction | ChangeFieldAction | UpdateIdAction;

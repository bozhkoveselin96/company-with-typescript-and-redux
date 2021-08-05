import {ActionTypes} from "../types/action";
import {EmployeeType} from "../types/employee";

interface GetAllAction {
    type: ActionTypes.GET_ALL,
    employees: EmployeeType[]
}

interface GetOneAction {
    type: ActionTypes.GET_ONE,
    employee: EmployeeType
}

interface CreateAction {
    type: ActionTypes.CREATE,
}

interface UpdateAction {
    type: ActionTypes.UPDATE,
}

interface DeleteAction {
    type: ActionTypes.DELETE,
    employee: EmployeeType
}

interface ChangeFieldAction {
    type: ActionTypes.CHANGE_FIELD,
    change: any
}

export type Action = GetAllAction | GetOneAction | CreateAction | UpdateAction | DeleteAction | ChangeFieldAction;

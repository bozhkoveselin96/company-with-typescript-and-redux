import {ActionTypes} from "../types/action";
import {EmployeeType} from "../types/employee";
import {TaskType} from "../types/task";

interface GetAllAction {
    type: ActionTypes.GET_ALL,
    payload: EmployeeType[] | TaskType[]
}

interface GetOneAction {
    type: ActionTypes.GET_ONE,
    payload: EmployeeType | TaskType
}

interface CreateAction {
    type: ActionTypes.CREATE,
    // payload: EmployeeType | TaskType
}

interface UpdateAction {
    type: ActionTypes.UPDATE,
    // payload: {}
}

interface DeleteAction {
    type: ActionTypes.DELETE,
    payload: EmployeeType | TaskType
}

interface ChangeFieldAction {
    type: ActionTypes.CHANGE_FIELD,
    payload: any
}

export type Action = GetAllAction | GetOneAction | CreateAction | UpdateAction | DeleteAction | ChangeFieldAction;

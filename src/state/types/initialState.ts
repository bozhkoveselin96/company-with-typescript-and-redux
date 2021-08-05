import {EmployeeType} from "./employee";
import {TaskType} from "./task";

export type InitialStateTypeEmployees = {
    allEmployees: EmployeeType[] | [],
    selected: {
        employee: EmployeeType | {},
        tasks: []
    } | {},
}

export type InitialStateTypeTasks = {
    allTasks: TaskType[]
}
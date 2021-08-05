import {EmployeeType} from "./employee";

export type InitialStateType = {
    all: EmployeeType[] | [],
    selected: {
        employee: EmployeeType,
        tasks: []
    },
}

import {EmployeeType} from "./employee";

export type InitialStateType = {
    employees: {
        all: EmployeeType[] | [],
        selected: EmployeeType | {}
    },
}
import {EmployeeType} from "./employee";

export type InitialStateType = {
    all: EmployeeType[] | [],
    selected: EmployeeType | {},
    lastId: number
}
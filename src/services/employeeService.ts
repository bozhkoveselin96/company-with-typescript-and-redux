import {EmployeeType} from "../state/types/employee";

const baseUrl: string = "http://dummy.restapiexample.com/api/v1";

export async function getEmployee(id: number) {
    const res = await fetch(`${baseUrl}/employees/${id}`);
    if (res.ok) return res.json();
    throw res;
}

export async function getAllEmployees() {
    const res = await fetch(`${baseUrl}/employees`);
    if (res.ok) return res.json();
    throw res;
}

export async function deleteEmployee(id: number) {
    const reqParams = {
        method: "DELETE"
    }
    const res = await fetch(`${baseUrl}/delete/${id}`, reqParams);
    if (res.ok) return res.json();
    throw res;
}

export async function updateEmployee(employee: EmployeeType) {
    const requestOptions = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
    }
    const response = await fetch(`${baseUrl}/employees`, requestOptions);
    if (response.ok) return response.json();
    throw response;
}

export async function createEmployee(employee: EmployeeType) {
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
    }
    const response = await fetch(`${baseUrl}/employees`, requestOptions);
    if (response.ok) return response.json();
    throw response;
}
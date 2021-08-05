import {EmployeeType} from "../state/types/employee";

const baseUrl: string = "https://610acd5452d56400176affaf.mockapi.io/company/api/v1/employees";

export async function getEmployee(id: string) {
    const res = await fetch(`${baseUrl}/${id}`);
    if (res.ok) return res.json();
    throw res;
}

export async function getAllEmployees() {
    const res = await fetch(baseUrl);
    if (res.ok) return res.json();
    throw res;
}

export async function deleteEmployee(id: number) {
    const reqParams = {
        method: "DELETE"
    }
    const res = await fetch(`${baseUrl}/${id}`, reqParams);
    if (res.ok) return res.json();
    throw res;
}

export async function updateEmployee(employee: EmployeeType) {
    const requestOptions = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
    }
    const response = await fetch(`${baseUrl}/${employee.id}`, requestOptions);
    if (response.ok) return response.json();
    throw response;
}

export async function createEmployee(employee: EmployeeType) {
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee)
    }
    const response = await fetch(baseUrl, requestOptions);
    if (response.ok) return response.json();
    throw response;
}
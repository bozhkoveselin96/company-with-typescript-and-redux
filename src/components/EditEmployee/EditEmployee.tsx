import {State} from "../../state";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {ChangeFieldType} from "../../state/types/field";
import {InitialStateType} from "../../state/types/initialState";
import {getEmployee as getEmployeeRequest, updateEmployee} from "../../services/employeeService";
import {getEmployee, changeEmployeeField, updateEmployee as update} from "../../state/action-creators/employeeActionCreators";

interface ParamType {
    id: string
}

export const EditEmployee = () => {
    const {id} = useParams<ParamType>();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect( () => {
        getEmployeeRequest(id)
            .then((employee) => {
                dispatch(getEmployee(employee))
            })
    }, [dispatch]);

    const state: InitialStateType = useSelector((state: State) => state.employees);
    const employee = state.selected.employee;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const change: ChangeFieldType = {
            name: event.target.name,
            value: event.target.value
        };
        dispatch(changeEmployeeField(change))
    };

    const handleClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateEmployee(employee)
            .then(() => {
                dispatch(update());
                history.push("/");
            });
    };

    return (
        <div style={{width:"500px", margin: "auto"}}>
            <h1>Edit Employee</h1>
            <form onSubmit={handleClickSubmit}>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First name</label>
                    <input value={employee.first_name} name="first_name" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last name</label>
                    <input value={employee.last_name} name="last_name" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input value={employee.email} name="email" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input value={employee.salary} name="salary" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">Avatar</label>
                    <input value={employee.avatar} name="avatar" onChange={handleChange} type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">EDIT</button>
            </form>
        </div>
    );
}
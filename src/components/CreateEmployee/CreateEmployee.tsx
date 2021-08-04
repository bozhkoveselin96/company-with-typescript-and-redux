import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changeEmployeeField} from "../../state/action-creators";
import {useHistory} from "react-router-dom";
import {EmployeeType} from "../../state/types/employee";
import {createEmployee} from "../../services/employeeService";
import {createEmployee as create} from "../../state/action-creators";

export const CreateEmployee: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState({
        name: "",
        age: 0,
        salary: 0,
        image: ""
    });

    function handleClickSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createEmployee(employee)
            .then(() => {
                dispatch(create(employee));
                history.push("/");
            });
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setEmployee((currEmployee: EmployeeType) => {
            return {
                ...currEmployee,
                [name]: value
            }
        });
    }

    return (
        <div>
            <h1>Add new Employee</h1>
            <form onSubmit={handleClickSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={handleChange} type="text" className="form-control" id="input-name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input onChange={handleChange} type="number" className="form-control" id="input-age" />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    $<input onChange={handleChange}type="number" className="form-control" id="input-salary" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input onChange={handleChange} type="text" className="form-control" id="input-image" />
                </div>

                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
    );
}
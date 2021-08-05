import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {EmployeeType} from "../../state/types/employee";
import {createEmployee} from "../../services/employeeService";
import {createEmployee as create} from "../../state/action-creators/employeeActionCreators";

export const CreateEmployee: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState<EmployeeType>({
        first_name: "",
        last_name: "",
        email: "",
        salary: "",
        avatar: ""
    });


    function handleClickSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createEmployee(employee)
            .then(() => {
                dispatch(create());
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
        <div style={{width:"500px", margin: "auto"}}>
            <h1>Create Employee</h1>
            <form onSubmit={handleClickSubmit}>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First name</label>
                    <input name="first_name" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last name</label>
                    <input name="last_name" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input name="email" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input name="salary" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">Avatar</label>
                    <input name="avatar" onChange={handleChange} type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
    );
}
import {EmployeeType} from "../../state/types/employee";
import {useDispatch} from "react-redux";
import React from "react";
import "./employee.css";
import {Trash} from 'react-bootstrap-icons';
import {Pencil} from 'react-bootstrap-icons';
import {Link} from "react-router-dom";
import {deleteEmployee as deleteRequest} from "../../services/employeeService";
import {deleteEmployee } from "../../state/action-creators"

export const Employee: React.FC<any> = ({employee}) => {
    const dispatch = useDispatch();

    function handleClickDelete() {
        deleteRequest(employee.id)
            .then(() => {
                dispatch(deleteEmployee(employee));
            });
    }

    return (
        <div className="card">
            {
                !employee.profile_image
                    ? <img src="https://icon-library.com/images/user_icon_png_1449226.png" className="card-img-top" alt="..."/>
                    : <img src={employee.profile_image} className="card-img-top" alt="..."/>
            }
                <div className="card-body">
                    <h5 className="card-title">{employee.employee_name}</h5>
                    <p className="card-text">{employee.employee_age} years old</p>
                    <p className="card-text">Salary: {employee.employee_salary}$</p>
                    <div className="actions">
                        <Link to={`employees/${employee.id}/edit`}>
                            <button className="btn btn-primary">
                                <Pencil />
                            </button>
                        </Link>
                        <button onClick={handleClickDelete} className="btn btn-danger"><Trash /></button>
                    </div>
                </div>
        </div>
    );
}
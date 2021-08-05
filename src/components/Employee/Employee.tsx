import {EmployeeType} from "../../state/types/employee";
import React from "react";
import "./employee.css";
import {useDispatch} from "react-redux";
import {Trash} from 'react-bootstrap-icons';
import {Pencil} from 'react-bootstrap-icons';
import {ListStars} from 'react-bootstrap-icons';
import {Link} from "react-router-dom";
import {deleteEmployee as deleteRequest} from "../../services/employeeService";
import {deleteEmployee } from "../../state/action-creators/employeeActionCreators"

export const Employee: React.FC<any> = ({employee}) => {
    const dispatch = useDispatch();

    function handleClickDelete() {
        deleteRequest(employee.id)
            .then(() => {
                dispatch(deleteEmployee(employee));
            });
    }

    return (
        <div className="card border-success mb-3">
            {
                !employee.avatar
                    ? <img src="https://icon-library.com/images/user_icon_png_1449226.png" className="card-img-top"
                           alt="..."/>
                    : <img src={employee.avatar} className="card-img-top" alt="..."/>
            }
            <div className="card-body">
                <h5 className="card-title">Name: {employee.first_name} {employee.last_name}</h5>
                <p className="card-text">Email: {employee.email}</p>
                <p className="card-text">Salary: {employee.salary}$</p>
            </div>
            <div className="card-footer">
                <Link to={`employees/${employee.id}/edit`}>
                    <button className="btn btn-primary">
                        <Pencil/>
                    </button>
                </Link>
                <Link to={`employees/${employee.id}/tasks`}>
                    <button className="btn btn-success">
                        <ListStars />
                    </button>
                </Link>
                <button onClick={handleClickDelete} className="btn btn-danger"><Trash/></button>
            </div>
        </div>
    );
}
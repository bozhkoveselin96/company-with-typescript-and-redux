import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAllEmployees as getAllRequest} from "../../services/employeeService";
import {getAllEmployees, updateLastId} from "../../state/action-creators"
import {Link} from "react-router-dom"
import {State} from "../../state";
import {Employee} from "../Employee/Employee";
import {EmployeeType} from "../../state/types/employee";
import {InitialStateType} from "../../state/types/initialState";


export const List: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getAllRequest()
            .then((employees) =>
                dispatch(getAllEmployees(employees.data)),
                dispatch(updateLastId(employees.data))
            )
    }, [dispatch]);

    const state: InitialStateType = useSelector((state: State) => state.employees);
    const allEmployees: EmployeeType[] = state.all;


    return (
        <div>
            <Link to="/posts/create">
                <button>Create post</button>
            </Link>
            {
                allEmployees.map((e) => (
                    <Employee key={e.id} employee={e}/>
                ))
            }
        </div>
    );
}
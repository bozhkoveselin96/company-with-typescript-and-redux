import {State} from "../../state";
import {Link} from "react-router-dom"
import React, {useEffect} from "react";
import {PlusCircle} from "react-bootstrap-icons";
import {Employee} from "../Employee/Employee";
import {useDispatch, useSelector} from "react-redux";
import {EmployeeType} from "../../state/types/employee";
import {InitialStateType} from "../../state/types/initialState";
import {getAllEmployees as getAllRequest} from "../../services/employeeService";
import {getAllEmployees} from "../../state/action-creators/employeeActionCreators"


export const List: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getAllRequest()
            .then((employees) => {
                dispatch(getAllEmployees(employees))
            })
    }, [dispatch]);

    const state: InitialStateType = useSelector((state: State) => state.employees);
    const allEmployees: EmployeeType[] = state.all;


    return (
        <div>
            <Link to="/employees/create">
                <button className="btn btn-primary"  style={{marginBottom: "10px", marginTop: "10px"}}>ADD EMPLOYEE <PlusCircle /></button>
            </Link>
            <div className="card-deck">
                {
                    allEmployees.map((e) => (
                        <Employee key={e.id} employee={e}/>
                    ))
                }
            </div>
        </div>
    );
}
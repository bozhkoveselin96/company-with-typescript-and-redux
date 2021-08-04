import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {List} from "./components/List/List";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "./state"

function App() {
  const dispatch = useDispatch();

  const {
      getAllEmployees,
      getEmployee,
      createEmployee,
      updateEmployee,
      deleteEmployee
  } = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: State) => state.employees)

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/employees/:id/edit">
              <h1>Edit</h1>
            </Route>
            <Route path="/employees/create">
              <h1>Create</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

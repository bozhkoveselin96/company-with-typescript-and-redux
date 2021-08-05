import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {List} from "./components/List/List";
import {CreateEmployee} from "./components/CreateEmployee/CreateEmployee";
import {EditEmployee} from "./components/EditEmployee/EditEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/employees/:id/edit">
              <EditEmployee />
            </Route>
            <Route path="/employees/create">
              <CreateEmployee />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <h1>Main</h1>
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

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users';
import NewEvent from './musicEvents/pages/NewEvent';
import './App.css';

const App = () => {
  return (
    <div className="App">
      
        <Router>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route> 
            <Route path="/events/new">
              <NewEvent />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>;
      
    </div>
  );
}

export default App;

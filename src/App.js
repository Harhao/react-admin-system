import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './views/Login';
import NoMatch from './views/NoMatch';
import './App.css';

function App() {
  return (
    <Router>
      <div className="entryWrap">
        <Switch>
          <Route path="/login" exact component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {CSSTransition } from "react-transition-group";
import Login from './views/Login';
import Index from './views/Index';
import PrivateRoute from './router/PrivateRoute';
import NoMatch from './views/NoMatch';
import './App.css';

function App() {
  return (
    <Router basename="/echo">
      <div className="entryWrap">
      <CSSTransition
        classNames="fade"
        timeout={300}
      >
        <Switch>
          <Route path="/login" exact component={Login}/>
          <PrivateRoute path="/" component={Index} exact/>
          <Route component={NoMatch}/>
        </Switch>
      </CSSTransition>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Auth from './containers/Auth/Auth';
import ToDoList from './containers/ToDoList/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/todolist" component={ToDoList} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import classes from './ToDoList.css';
import ToDoListProfile from './ToDoListProfile/ToDoListProfile';
import ToDoListCards from './ToDoListCards/ToDoListCards';
import ToDoListCategories from './ToDoListCategories/ToDoListCategories';

class ToDoList extends Component {
  render() {
    return (
      <div className={classes.ToDoList}>
        <div style={{ width: '20%', height: '100%', padding: '1rem' }}>
          <ToDoListProfile />
          <ToDoListCategories />
        </div>
        <div style={{ width: '80%', height: '100%', padding: '1rem 0' }}>
          <ToDoListCards />
        </div>
      </div>
    );
  }
}

export default ToDoList;

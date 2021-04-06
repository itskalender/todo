import React, { Component } from 'react';

import classes from './ToDoList.css';

import ToDoListProfile from './ToDoListProfile/ToDoListProfile';
import ToDoListCategories from './ToDoListCategories/ToDoListCategories';
import ToDoListCards from './ToDoListCards/ToDoListCards';

class ToDoList extends Component {
  render() {
    return (
      <div className={classes.ToDoList}>
        <div className={classes.ColumnFirst}>
          <ToDoListProfile />
          <ToDoListCategories />
        </div>
        <div className={classes.ColumnSecond}>
          <ToDoListCards />
        </div>
      </div>
    );
  }
}

export default ToDoList;

import React, { Component } from 'react';

import classes from './ToDoList.css';
import ToDoListProfile from './ToDoListProfile/ToDoListProfile';
import ToDoListCards from './ToDoListCards/ToDoListCards';

class ToDoList extends Component {
  render() {
    return (
      <div className={classes.ToDoList}>
        <div style={{ width: '20%', height: '100%' }}>
          <ToDoListProfile />
          <div
            style={{
              width: '100%',
              height: '80%',
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            CHECKBOX
          </div>
        </div>
        <ToDoListCards />
      </div>
    );
  }
}

export default ToDoList;

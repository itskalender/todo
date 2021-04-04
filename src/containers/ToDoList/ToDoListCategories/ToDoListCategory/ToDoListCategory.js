import React from 'react';

import classes from './ToDoListCategory.css';

const toDoListCategory = props => {
  return (
    <div className={classes.Category}>
      <input
        type="checkbox"
        value={props.category}
        onChange={() => props.checkboxChanged(props.category)}
      />
      <p>{props.category}</p>
    </div>
  );
};

export default toDoListCategory;

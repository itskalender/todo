import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import classes from './ToDoListCardTask.css';

const toDoListCardTask = props => {
  return (
    <div className={classes.Task}>
      <input type="checkbox" />
      <p>{props.task}</p>
      <FontAwesomeIcon
        className={classes.Delete}
        icon={faTrash}
        onClick={() => props.taskDeleted(props.index, props.cardId)}
      />
    </div>
  );
};

export default toDoListCardTask;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import classes from './ToDoListCardTask.css';

const toDoListCardTask = props => {
  return (
    <div className={classes.Task}>
      <input
        type="checkbox"
        value={props.taskId}
        checked={props.checkedTasks.some(
          checkedTask =>
            checkedTask.cardId === props.cardId &&
            checkedTask.taskId === props.taskId
        )}
        onChange={() => props.taskCheckboxChanged(props.cardId, props.taskId)}
      />
      <p>{props.task}</p>
      <FontAwesomeIcon
        className={classes.Delete}
        icon={faTrash}
        onClick={() => props.taskDeleted(props.taskId, props.cardId)}
      />
    </div>
  );
};

export default toDoListCardTask;

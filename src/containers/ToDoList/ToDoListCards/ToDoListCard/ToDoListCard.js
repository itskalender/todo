import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import classes from './ToDoListCard.css';
import ToDoListCardTask from './ToDoListCardTask/ToDoListCardTask';

class toDoListCard extends Component {
  state = {
    task: '',
  };

  taskChangedHandler = e => {
    const newTask = e.target.value;
    this.setState({ task: newTask });
  };

  render() {
    let toDoListCardTask = null;
    if (this.props.tasks) {
      toDoListCardTask = this.props.tasks.map((task, index) => {
        return (
          <ToDoListCardTask
            key={index}
            cardId={this.props.id}
            index={index}
            task={task}
            taskDeleted={this.props.taskDeleted}
          />
        );
      });
    }

    return (
      <div className={classes.ToDoListCard}>
        <div className={classes.DeleteIcon}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => this.props.cardDeleted(this.props.id)}
          />
        </div>
        <input type="text" placeholder="Card Title"></input>
        <input
          type="text"
          placeholder="New Task"
          onChange={this.taskChangedHandler}
        ></input>
        <button
          onClick={() => this.props.taskAdded(this.state.task, this.props.id)}
        >
          Add
        </button>
        <hr />
        {toDoListCardTask}
      </div>
    );
  }
}

export default toDoListCard;

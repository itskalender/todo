import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

import classes from './ToDoListCard.css';
import ToDoListCardTask from './ToDoListCardTask/ToDoListCardTask';
import * as actions from '../../../../store/actions/index';
import Overlay from '../../../../components/Overlay/Overlay';

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

    let overlay = null;
    if (this.props.isSaved) {
      overlay = (
        <Overlay>
          <button onClick={() => this.props.onCardEditted(this.props.id)}>
            EDIT
          </button>
          <button onClick={() => this.props.onCardDeleted(this.props.id)}>
            DELETE CARD
          </button>
        </Overlay>
      );
    }

    return (
      <div className={classes.ToDoListCard}>
        <div
          className={[
            classes.DeleteIcon,
            this.props.isSaved ? classes.Hidden : '',
          ].join(' ')}
        >
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => this.props.cardDeleted(this.props.id)}
          />
        </div>
        <input type="text" placeholder="Card Title"></input>
        <div className={classes.Category}>
          <input
            type="text"
            placeholder="Category"
            value={this.props.category}
            onChange={e =>
              this.props.categoryChanged(e.target.value, this.props.id)
            }
          />
          <FontAwesomeIcon
            className={classes.AddIcon}
            icon={faPlus}
            size="1x"
            onClick={() => this.props.categoryAdded(this.props.id)}
          />
        </div>
        <div className={this.props.isSaved ? classes.Hidden : ''}>
          <input
            type="text"
            placeholder="New Task"
            onChange={this.taskChangedHandler}
          ></input>
          <button
            onClick={() => this.props.taskAdded(this.state.task, this.props.id)}
          >
            Add Task
          </button>
        </div>
        <hr />
        <div>{toDoListCardTask}</div>
        <button
          className={this.props.isSaved ? classes.Hidden : ''}
          onClick={() => this.props.onCardSaved(this.props.id)}
        >
          Save Card
        </button>
        {overlay}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCardSaved: cardId => dispatch(actions.cardSaved(cardId)),
    onCardEditted: cardId => dispatch(actions.cardEditted(cardId)),
    onCardDeleted: cardId => dispatch(actions.cardDeleted(cardId)),
  };
};

export default connect(null, mapDispatchToProps)(toDoListCard);

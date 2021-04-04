import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

import classes from './ToDoListCard.css';

import ToDoListCardTask from './ToDoListCardTask/ToDoListCardTask';
import Overlay from '../../../../components/UI/Overlay/Overlay';
import * as actions from '../../../../store/actions/index';

class toDoListCard extends Component {
  state = {
    task: '',
  };

  taskChangedHandler = e => {
    const newTask = e.target.value;
    this.setState({ task: newTask });
  };

  titleChangedHandler = e => {
    const newTitle = e.target.value;
    this.setState({ title: newTitle });
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
        {/* <div
          className={[
            classes.DeleteIcon,
            this.props.isSaved ? classes.Hidden : '',
          ].join(' ')}
        > */}
        <FontAwesomeIcon
          className={[
            classes.DeleteIcon,
            this.props.isSaved ? classes.Hidden : '',
          ].join(' ')}
          icon={faTimes}
          onClick={() => this.props.cardDeleted(this.props.id)}
        />
        {/* </div> */}

        <input
          type="text"
          placeholder="Card Title"
          value={this.props.title}
          onChange={e =>
            this.props.onTitleChanged(e.target.value, this.props.id)
          }
        />

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
            className={[
              classes.AddCategoryIcon,
              this.props.category.trim().length === 0 ||
              this.props.isCategorySaved
                ? classes.Disabled
                : '',
            ].join(' ')}
            icon={this.props.isCategorySaved ? faCheck : faPlus}
            size="1x"
            onClick={() => {
              if (this.props.category.length === 0) return;
              this.props.categoryAdded(this.props.id);
            }}
          />
        </div>

        <div className={this.props.isSaved ? classes.Hidden : classes.AddTask}>
          <input
            type="text"
            placeholder="New Task"
            value={this.state.task}
            onChange={this.taskChangedHandler}
          ></input>
          <FontAwesomeIcon
            className={[
              classes.AddTaskIcon,
              this.state.task.trim().length > 0 ? '' : classes.Disabled,
            ].join(' ')}
            icon={faPlus}
            size="1x"
            onClick={e => {
              if (this.state.task.trim().length === 0) return;
              this.props.taskAdded(this.state.task, this.props.id);
              this.setState({ task: '' });
            }}
          />
          {/* <button
            onClick={() => this.props.taskAdded(this.state.task, this.props.id)}
          >
            Add Task
          </button> */}
        </div>

        <div>{toDoListCardTask}</div>
        <button
          className={this.props.isSaved ? classes.Hidden : ''}
          onClick={() => this.props.onCardSaved(this.props.id)}
        >
          SAVE
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
    onTitleChanged: (title, cardId) =>
      dispatch(actions.titleChanged(title, cardId)),
  };
};

export default connect(null, mapDispatchToProps)(toDoListCard);

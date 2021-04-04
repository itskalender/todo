import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ToDoListCards.css';
import CreateToDoListCard from './CreateToDoListCard/CreateToDoListCard';
import ToDoListCard from './ToDoListCard/ToDoListCard';
import * as actions from '../../../store/actions/index';

class ToDoListCards extends Component {
  render() {
    let toDoListCard = null;
    if (this.props.toDoCards.length > 0) {
      toDoListCard = this.props.toDoCards.map((card, index) => {
        return (
          <ToDoListCard
            key={index}
            id={card.id}
            title={card.title}
            tasks={card.tasks}
            category={card.category}
            isSaved={card.isSaved}
            taskAdded={this.props.onTaskAdded}
            taskDeleted={this.props.onTaskDeleted}
            cardDeleted={this.props.onCardDeleted}
            categoryChanged={this.props.onCategoryChanged}
            categoryAdded={this.props.onCategoryAdded}
          />
        );
      });
    }

    return (
      <div className={classes.ToDoListCards}>
        {toDoListCard}
        <CreateToDoListCard cardCreated={this.props.onCardAdded} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoCards: state.toDoCards,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCardAdded: () => dispatch(actions.cardCreated()),
    onCardDeleted: cardId => dispatch(actions.cardDeleted(cardId)),

    onCategoryAdded: cardId => dispatch(actions.categoryAdded(cardId)),
    onCategoryChanged: (category, cardId) =>
      dispatch(actions.categoryChanged(category, cardId)),

    onTaskAdded: (taskIndex, cardId) =>
      dispatch(actions.taskAdded(taskIndex, cardId)),
    onTaskDeleted: (taskIndex, cardId) =>
      dispatch(actions.taskDeleted(taskIndex, cardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListCards);

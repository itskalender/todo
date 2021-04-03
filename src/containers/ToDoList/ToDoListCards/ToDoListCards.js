import React, { Component } from 'react';

import classes from './ToDoListCards.css';
import CreateToDoListCard from './CreateToDoListCard/CreateToDoListCard';
import ToDoListCard from './ToDoListCard/ToDoListCard';

class ToDoListCards extends Component {
  state = {
    toDoItems: [],
  };

  // Create Card
  cardCreatedHandler = () => {
    const id = new Date().getTime();
    const updatedToDoItems = this.state.toDoItems.concat({
      title: '',
      tasks: [],
      id: id,
    });
    this.setState({
      toDoItems: updatedToDoItems,
    });
  };

  cardDeletedHandler = cardId => {
    const updatedToDoItems = [...this.state.toDoItems];
    const cardIndex = updatedToDoItems.findIndex(card => card.id === cardId);
    updatedToDoItems.splice(cardIndex, 1);
    this.setState({
      toDoItems: updatedToDoItems,
    });
  };

  taskAddedHandler = (taskName, cardId) => {
    const updatedToDoItems = [...this.state.toDoItems];
    const cardIndex = updatedToDoItems.findIndex(card => card.id === cardId);
    const updatedCard = { ...updatedToDoItems[cardIndex] };
    const updatedTasks = [...updatedCard.tasks];
    updatedTasks.push(taskName);
    ///
    updatedCard.tasks = updatedTasks;
    updatedToDoItems[cardIndex] = updatedCard;

    this.setState({
      toDoItems: updatedToDoItems,
    });
  };

  taskDeletedHandler = (taskIndex, cardId) => {
    const updatedToDoItems = [...this.state.toDoItems];
    const cardIndex = updatedToDoItems.findIndex(card => card.id === cardId);
    const updatedCard = { ...updatedToDoItems[cardIndex] };
    const updatedTasks = [...updatedCard.tasks];
    updatedTasks.splice(taskIndex, 1);
    ///
    updatedCard.tasks = updatedTasks;
    updatedToDoItems[cardIndex] = updatedCard;
    this.setState({
      toDoItems: updatedToDoItems,
    });
  };

  render() {
    console.log(this.state);
    let toDoListCard = null;
    if (this.state.toDoItems.length > 0) {
      toDoListCard = this.state.toDoItems.map((card, index) => {
        return (
          <ToDoListCard
            key={index}
            id={card.id}
            title={card.title}
            tasks={card.tasks}
            taskAdded={this.taskAddedHandler}
            taskDeleted={this.taskDeletedHandler}
            cardDeleted={this.cardDeletedHandler}
          />
        );
      });
    }

    return (
      <div className={classes.ToDoListCards}>
        {toDoListCard}
        <CreateToDoListCard cardCreatedHandler={this.cardCreatedHandler} />
      </div>
    );
  }
}

export default ToDoListCards;

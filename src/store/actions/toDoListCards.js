import * as actionTypes from './actionTypes';

export const cardCreated = () => {
  const id = new Date().getTime();
  const toDoCard = {
    title: '',
    tasks: [],
    id: id,
    category: '',
    isSaved: false,
    isCategorySaved: false,
  };
  return {
    type: actionTypes.CARD_CREATED,
    toDoCard: toDoCard,
  };
};

export const cardSaved = cardId => {
  return {
    type: actionTypes.CARD_SAVED,
    cardId: cardId,
  };
};

export const cardEditted = cardId => {
  return {
    type: actionTypes.CARD_EDITTED,
    cardId: cardId,
  };
};

export const cardDeleted = cardId => {
  return {
    type: actionTypes.CARD_DELETED,
    cardId: cardId,
  };
};

export const titleChanged = (title, cardId) => {
  return {
    type: actionTypes.TITLE_CHANGED,
    title: title,
    cardId: cardId,
  };
};

export const categoryAdded = cardId => {
  return {
    type: actionTypes.CATEGORY_ADDED,
    cardId: cardId,
  };
};

export const categoryChanged = (category, cardId) => {
  return {
    type: actionTypes.CATEGORY_CHANGED,
    category: category,
    cardId: cardId,
  };
};

export const taskAdded = (taskName, cardId) => {
  return {
    type: actionTypes.TASK_ADDED,
    taskName: taskName,
    cardId: cardId,
  };
};

export const taskDeleted = (taskIndex, cardId) => {
  return {
    type: actionTypes.TASK_DELETED,
    taskIndex: taskIndex,
    cardId: cardId,
  };
};

export const taskCheckboxChanged = (cardId, taskId) => {
  return {
    type: actionTypes.TASK_CHECKBOX_CHANGED,
    cardId: cardId,
    taskId: taskId,
  };
};

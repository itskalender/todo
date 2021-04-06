import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categoryDatas: [],
  toDoCards: [],
  copiedToDoCards: [],
  checkedTasks: [],
  isChecked: false, // for category
  isTaskChecked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CARD_CREATED: {
      return {
        ...state,
        toDoCards: state.toDoCards.concat(action.toDoCard),
      };
    }

    case actionTypes.CARD_SAVED: {
      const updatedToDoCards = [...state.toDoCards];
      const cardIndex = updatedToDoCards.findIndex(
        card => card.id === action.cardId
      );
      const updatedCard = { ...updatedToDoCards[cardIndex] };
      updatedCard.isSaved = !updatedCard.isSaved;
      updatedToDoCards[cardIndex] = updatedCard;
      return {
        ...state,
        toDoCards: updatedToDoCards,
      };
    }

    case actionTypes.CARD_EDITTED: {
      const updatedToDoCards = [...state.toDoCards];
      const cardIndex = updatedToDoCards.findIndex(
        card => card.id === action.cardId
      );
      const updatedCard = { ...updatedToDoCards[cardIndex] };
      updatedCard.isSaved = !updatedCard.isSaved;
      updatedToDoCards[cardIndex] = updatedCard;
      return {
        ...state,
        toDoCards: updatedToDoCards,
      };
    }

    case actionTypes.CARD_DELETED: {
      const updatedToDoCards = [...state.toDoCards];
      const cardIndex = updatedToDoCards.findIndex(
        card => card.id === action.cardId
      );
      updatedToDoCards.splice(cardIndex, 1);
      //
      const updatedCategoryDatas = [...state.categoryDatas];
      const categoryDataIndex = updatedCategoryDatas.findIndex(
        categData => categData.cardId === action.cardId
      );
      updatedCategoryDatas.splice(categoryDataIndex, 1);
      return {
        ...state,
        toDoCards: updatedToDoCards,
        categoryDatas: updatedCategoryDatas,
      };
    }

    case actionTypes.TITLE_CHANGED: {
      const updatedToDoCards = [...state.toDoCards];
      const cardIndex = updatedToDoCards.findIndex(
        card => card.id === action.cardId
      );
      const updatedCard = { ...updatedToDoCards[cardIndex] };
      updatedCard.title = action.title;
      updatedToDoCards[cardIndex] = updatedCard;
      return {
        ...state,
        toDoCards: updatedToDoCards,
      };
    }

    case actionTypes.CATEGORY_ADDED: {
      const card = state.toDoCards.find(card => card.id === action.cardId);
      const categoryData = { category: card.category, cardId: card.id };
      const hasSameCardId = state.categoryDatas.some(
        categData => categData.cardId === categoryData.cardId
      );
      if (hasSameCardId) return state;
      //
      const updatedToDoCards = [...state.toDoCards];
      const cardIndex = updatedToDoCards.findIndex(
        card => card.id === action.cardId
      );
      const updatedCard = { ...updatedToDoCards[cardIndex] };
      updatedCard.isCategorySaved = true;
      updatedToDoCards[cardIndex] = updatedCard;

      return {
        ...state,
        categoryDatas: state.categoryDatas.concat(categoryData),
        toDoCards: updatedToDoCards,
      };
    }

    case actionTypes.CATEGORY_CHANGED: {
      const updatedToDoCards = [...state.toDoCards];
      const cardIndex = updatedToDoCards.findIndex(
        card => card.id === action.cardId
      );
      const updatedCard = { ...updatedToDoCards[cardIndex] };
      updatedCard.category = action.category;
      updatedToDoCards[cardIndex] = updatedCard;
      return {
        ...state,
        toDoCards: updatedToDoCards,
      };
    }

    case actionTypes.TASK_ADDED: {
      const updatedToDoCards = [...state.toDoCards];
      const cardIndex = updatedToDoCards.findIndex(
        card => card.id === action.cardId
      );
      const updatedCard = { ...updatedToDoCards[cardIndex] };
      const updatedTasks = [...updatedCard.tasks];
      updatedTasks.push(action.taskName);
      updatedCard.tasks = updatedTasks;
      updatedToDoCards[cardIndex] = updatedCard;
      return {
        ...state,
        toDoCards: updatedToDoCards,
      };
    }

    case actionTypes.TASK_DELETED:
      const updatedToDoCards = [...state.toDoCards];
      const cardIndex = updatedToDoCards.findIndex(
        card => card.id === action.cardId
      );
      const updatedCard = { ...updatedToDoCards[cardIndex] };
      const updatedTasks = [...updatedCard.tasks];
      updatedTasks.splice(action.taskIndex, 1);
      updatedCard.tasks = updatedTasks;
      updatedToDoCards[cardIndex] = updatedCard;
      return {
        ...state,
        toDoCards: updatedToDoCards,
      };

    case actionTypes.TASK_CHECKBOX_CHANGED: {
      const prevChecked = state.isTaskChecked;
      const updatedIsTaskChecked = !prevChecked;

      const updatedCheckedTasks = [...state.checkedTasks];
      const data = { cardId: action.cardId, taskId: action.taskId };

      const controlCheckTasks = updatedCheckedTasks.some(
        taskData =>
          taskData.cardId === action.cardId && taskData.taskId === action.taskId
      );

      if (!controlCheckTasks) {
        updatedCheckedTasks.push(data);
      }

      if (controlCheckTasks) {
        const dataIndex = updatedCheckedTasks.findIndex(
          taskData =>
            taskData.cardId === action.cardId &&
            taskData.taskId === action.taskId
        );
        updatedCheckedTasks.splice(dataIndex, 1);
      }

      return {
        ...state,
        checkedTasks: updatedCheckedTasks,
        isTaskChecked: updatedIsTaskChecked,
      };
    }

    case actionTypes.CHECKBOX_CHANGED: // for category
      const newChecked = !state.isChecked;
      if (newChecked) {
        const copiedToDoCards = [...state.toDoCards];
        const correspondingCards = state.toDoCards.filter(
          card => card.category === action.category
        );

        return {
          ...state,
          isChecked: newChecked,
          copiedToDoCards: [...copiedToDoCards],
          toDoCards: [...correspondingCards],
        };
      } else {
        return {
          ...state,
          isChecked: newChecked,
          toDoCards: [...state.copiedToDoCards],
        };
      }
    case actionTypes.LOG_OUT: {
      return {
        ...state,
        categoryDatas: [],
        toDoCards: [],
        copiedToDoCards: [],
        checkedTasks: [],
        isChecked: false,
        isTaskChecked: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;

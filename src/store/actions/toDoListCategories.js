import * as actionTypes from './actionTypes';

export const checkboxChanged = category => {
  return {
    type: actionTypes.CHECKBOX_CHANGED,
    category: category,
  };
};

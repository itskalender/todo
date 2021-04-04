import React from 'react';

import classes from './CreateToDoListCard.css';

const CreateToDoListCard = props => {
  return (
    <div className={classes.CreateCard}>
      <p>NEW PROJECT</p>
      <button onClick={props.cardCreated}>CREATE</button>
    </div>
  );
};

export default CreateToDoListCard;

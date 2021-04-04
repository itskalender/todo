import React from 'react';

import classes from './Overlay.css';

const overlay = props => {
  return <div className={classes.Overlay}>{props.children}</div>;
};

export default overlay;

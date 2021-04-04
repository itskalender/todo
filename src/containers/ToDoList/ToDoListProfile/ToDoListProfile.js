import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import classes from './ToDoListProfile.css';

class ToDoListProfile extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  componentDidMount() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    this.setState({
      firstName: firstName,
      lastName: lastName,
    });
  }

  render() {
    return (
      <div className={classes.ToDoListProfile}>
        <div className={classes.Logo}>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
        <p className={classes.FullName}>
          <span>{this.state.firstName}</span>
          <br />
          <span>{this.state.lastName}</span>
        </p>
      </div>
    );
  }
}

export default ToDoListProfile;

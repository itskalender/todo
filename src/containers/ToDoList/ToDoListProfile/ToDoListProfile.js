import React, { Component } from 'react';

import classes from './ToDoListProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
        <p>
          {this.state.firstName} <br /> {this.state.lastName}
        </p>
      </div>
    );
  }
}

export default ToDoListProfile;

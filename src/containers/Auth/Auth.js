import React, { Component } from 'react';

import classes from './Auth.css';

class Auth extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  firstNameChangedHandler = e => {
    this.setState({ firstName: e.target.value });
  };

  lastNameChangedHandler = e => {
    this.setState({ lastName: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    localStorage.setItem('firstName', this.state.firstName);
    localStorage.setItem('lastName', this.state.lastName);
    this.props.history.push('/todolist'); // NOTE
  };

  render() {
    return (
      <div className={classes.Auth}>
        <form className={classes.Form} onSubmit={this.onSubmitHandler}>
          <input
            onChange={e => this.firstNameChangedHandler(e)}
            className={classes.Input}
            type="text"
            placeholder="Name"
          ></input>
          <input
            onChange={e => this.lastNameChangedHandler(e)}
            className={classes.Input}
            type="text"
            placeholder="Surname"
          ></input>
          <button className={classes.ButtonAuth} to="/todolist">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Auth;

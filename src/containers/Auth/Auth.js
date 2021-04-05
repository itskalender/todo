import React, { Component } from 'react';

import classes from './Auth.css';

class Auth extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  componentDidMount() {
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
  }

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
    this.props.history.push('/todolist');
  };

  render() {
    const isAuthDataValid =
      this.state.firstName.trim().length > 0 &&
      this.state.lastName.trim().length > 0;

    return (
      <div className={classes.Auth}>
        <form
          className={classes.Form}
          onSubmit={
            isAuthDataValid ? this.onSubmitHandler : e => e.preventDefault()
          }
        >
          <input
            onChange={this.firstNameChangedHandler}
            className={classes.Input}
            type="text"
            placeholder="Name"
          ></input>
          <input
            onChange={this.lastNameChangedHandler}
            className={classes.Input}
            type="text"
            placeholder="Surname"
          ></input>
          <button
            className={[
              classes.ButtonAuth,
              isAuthDataValid ? classes.EnabledButton : null,
            ].join(' ')}
          >
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}

export default Auth;

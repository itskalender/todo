import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import classes from './ToDoListProfile.css';
import * as actions from '../../../store/actions/index';

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
        <Link to="/">
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            className={classes.Logo}
            onClick={this.props.onLogout}
          />
        </Link>
        <p className={classes.FullName}>
          <span>{this.state.firstName}</span>
          <br />
          <span>{this.state.lastName}</span>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(ToDoListProfile);

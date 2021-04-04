import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ToDoListCategories.css';
import ToDoListCategory from './ToDoListCategory/ToDoListCategory';
import * as actions from '../../../store/actions/index';

class ToDoListCategories extends Component {
  render() {
    let categories = [];
    if (this.props.categoryDatas.length > 0) {
      this.props.categoryDatas.map(categoryData => {
        if (categories.includes(categoryData.category)) return;
        return categories.push(categoryData.category);
      });
    }

    const categoriesComponents = categories.map((category, index) => (
      <ToDoListCategory
        key={index}
        category={category}
        checkboxChanged={this.props.onCheckboxChanged}
      />
    ));

    return (
      <div className={classes.Categories}>
        <p>Categories</p>
        <hr />
        {categoriesComponents}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryDatas: state.categoryDatas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckboxChanged: category => dispatch(actions.checkboxChanged(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListCategories);

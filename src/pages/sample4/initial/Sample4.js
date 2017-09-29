import React, { Component } from 'react';

import SaveBtnContainer from './SaveBtn/SaveBtnContainer';
import FilterTodoContainer from './FilterTodo/FilterTodoContainer';
import ListContainer from './List/ListContainer';

class Sample4 extends Component {
  render() {
    return (
      <div>
        Sample 4
        <SaveBtnContainer />
        <hr />
        <FilterTodoContainer />
        <hr />
        <ListContainer />
      </div>
    );
  }
}

export default Sample4;
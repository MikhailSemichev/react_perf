import React, { Component } from 'react';

import SaveBtnContainer from './SaveBtn/SaveBtnContainer';
import FilterTodoContainer from './FilterTodo/FilterTodoContainer';
import ListContainer from './List/ListContainer';

class Sample5 extends Component {
  render() {
    return (
      <div className="page-content">
        Sample 5 (Virtualized)
        <SaveBtnContainer />
        <hr />
        <FilterTodoContainer />
        <hr />
        <ListContainer />
      </div>
    );
  }
}

export default Sample5;
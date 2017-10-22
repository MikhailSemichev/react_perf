import React, {Component} from 'react';

import SaveBtnContainer from './SaveBtn/SaveBtnContainer';
import FilterTodoContainer from './FilterTodo/FilterTodoContainer';
import ListContainer from './List/ListContainer';

class Sample3 extends Component {
    render() {
        return (
            <div>
                Sample 3
                <SaveBtnContainer/>
                <hr/>
                <FilterTodoContainer/>
                <hr/>
                <ListContainer/>
            </div>
        );
    }
}

export default Sample3;
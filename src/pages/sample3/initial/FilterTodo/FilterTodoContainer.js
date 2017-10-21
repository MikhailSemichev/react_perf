import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../../../../store/filter';

@connect(
    state => ({
        filter: state.filter
    }),
    { setFilter }
)
class FilterTodoContainer extends Component {
    setFilter = e => {
        this.props.setFilter(e.target.value);
    };

    render() {
        return (
            <div>
                <input type="text"
                    value={this.props.filter}
                    onChange={this.setFilter} />
            </div>
        );
    }
}

export default FilterTodoContainer;
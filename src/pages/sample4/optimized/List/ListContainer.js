import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import ListView from './ListView';

import { loadList } from '../../../../store/list2';

const getFilteredIds = createSelector(
    state => state.list2.ids,
    state => state.list2.values,
    state => state.filter,
    (ids, values, filter) => {
        return ids.filter(id => values[id].name.includes(filter));
    }
);

@connect(
    state => ({
        ids: getFilteredIds(state)
    }),
    { loadList }
)
class ListContainer extends Component {
    componentDidMount() {
        this.props.loadList(1000);
    }

    render() {
        return <ListView ids={this.props.ids} />;
    }
}

export default ListContainer;
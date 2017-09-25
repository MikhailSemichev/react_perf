import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './ListView';
import { loadList } from '../../../../store/list2';

@connect(
    state => ({
        ids: state.list2.ids
    }),
    { loadList }
)
class ListContainer extends Component {
    componentDidMount() {
        this.props.loadList(3000);
    }

    render() {
        return <ListView ids={this.props.ids} />;
    }
}

export default ListContainer;
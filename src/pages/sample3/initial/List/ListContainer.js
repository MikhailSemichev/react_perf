import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './ListView';
import { loadList } from '../../../../store/list2';

@connect(
    state => {
        const ids = state.list2.ids;
        const values = state.list2.values;
        const filter = state.filter;
        
        // debugger;

        return {
            ids: ids, // ids.filter(id => values[id].name.toUpperCase()
                //.includes(filter.toUpperCase())),
            //
            isSaving: state.isSaving
        };
    },
    { loadList }
)
class ListContainer extends Component {
    componentDidMount() {
        this.props.loadList(3000);
    }

    render() {
        return (
            <ListView 
                ids={this.props.ids}
                isSaving={this.props.isSaving} />
        );
    }
}

export default ListContainer;
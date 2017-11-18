import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemView from './ItemView';
import { toggleTodo } from '../../../../store/list2';

@connect(
    (state, {itemId}) => ({
        item: state.list2.values[itemId]
    }),
    { toggleTodo }
)
class ItemContainer extends Component {
    toggle = () => {
        this.props.toggleTodo(
            this.props.item.id,
            !this.props.item.isDone
        );
    };

    render() {
        const { item } = this.props;

        return (
            <ItemView 
                item={item}
                toggle={this.toggle} />
        );
    }
}

export default ItemContainer;
import React, { Component } from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';

import ItemContainer from '../Item/ItemContainer';

import ItemView from '../Item/ItemView';

class ListView extends Component {

    rowRenderer = ({index, key, style}) => {
        const itemId = this.ids[index];
        return (
            <div key={key} style={style}>
                <ItemContainer itemId={itemId} />
            </div>
        );
    };

    render() {
        const { ids } = this.props;
        this.ids = ids;

        return (
            <div className="todo-list">

                <List
                    height={300}
                    rowCount={ids.length}
                    rowHeight={40}
                    rowRenderer={this.rowRenderer}
                    width={500} />

            </div>
        );
    }
}

export default ListView;
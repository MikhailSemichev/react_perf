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
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            key={ids.length}
                            
                            height={height}
                            width={width} 
                            rowCount={ids.length}
                            rowHeight={40}
                            rowRenderer={this.rowRenderer}
                        />
                    )}
                </AutoSizer>
            </div>
       
        );
    }
}

export default ListView;
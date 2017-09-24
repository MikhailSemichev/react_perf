import React, { PureComponent } from 'react';

import Item from './Item';

class ListView extends PureComponent {
    render() {
        const { list, onToggle } = this.props;

        return (
            <div className="todo-list">
                {list.map(item => (
                    <Item
                        key={item.id} 
                        item={item}
                        onToggle={onToggle} />
                ))}
            </div>
        );
    }
}

export default ListView;
import React from 'react';

import ItemContainer from '../Item/ItemContainer';

const ListView = ({ ids }) => {
    return (
        <div className="todo-list">
            {ids.map(id => (
                <ItemContainer
                    key={id}
                    itemId={id} />
            ))}
        </div>
    );
}

export default ListView;
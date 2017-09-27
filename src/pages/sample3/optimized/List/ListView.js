import React from 'react';

import ItemContainer from '../Item/ItemContainer';
import whyDidYouUpdate from '../../../../utils/whyDidYouUpdate';

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
//export default whyDidYouUpdate(ListView);
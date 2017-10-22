import React from 'react';

import ItemContainer from '../Item/ItemContainer';
import SavingBlock from '../../../../components/SavingBlock';

const ListView = ({ ids }) => {
    return (
        <div className="todo-list">
            <SavingBlock/>
            
            {ids.map(id => (
                <ItemContainer
                    key={id}
                    itemId={id} />
            ))}
        </div>
    );
}

export default ListView;

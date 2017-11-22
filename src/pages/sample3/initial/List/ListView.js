import React from 'react';

import ItemContainer from '../Item/ItemContainer';
import SavingBlock from '../../../../components/SavingBlock';
import whyDidYouUpdate from '../../../../utils/whyDidYouUpdate';

const ListView = ({ ids, isSaving }) => {
    return (
        <div className="todo-list">
            {/*<SavingBlock/>*/}
            {isSaving && <div className="saving-block">Saving...</div>}
            
            {ids.map(id => (
                <ItemContainer
                    key={id}
                    itemId={id} />
            ))}
        </div>
    );
}

export default whyDidYouUpdate(ListView);

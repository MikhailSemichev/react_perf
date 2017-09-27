import React from 'react';

const ItemView = ({ item, toggle }) => {
    return (
        <div className="todo-item">
            <input type="text" defaultValue={item.name} />
            <input type="checkbox"
                defaultChecked={item.isDone}
                onChange={toggle} />
        </div>
    );
}

export default ItemView;
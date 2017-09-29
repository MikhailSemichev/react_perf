import React from 'react';
import LazyDatePicker from '../LazyDatePicker/LazyDatePicker';

const ItemView = ({ item, toggle }) => {
    return (
        <div className="todo-item">
            <input type="text" defaultValue={item.name} />
            <input type="checkbox"
                defaultChecked={item.isDone}
                onChange={toggle} />
            <div className="date-picker">
                <LazyDatePicker />
            </div>
        </div>
    );
}

export default ItemView;
import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';

const ItemView = ({ item, toggle }) => {
    return (
        <div className="todo-item">
            <input type="text" defaultValue={item.name} />
            <input type="checkbox"
                defaultChecked={item.isDone}
                onChange={toggle} />
            <div className="date-picker">
                <DatePicker />
            </div>
        </div>
    );
}

export default ItemView;
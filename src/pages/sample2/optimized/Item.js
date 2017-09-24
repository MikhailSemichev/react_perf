import React, { PureComponent } from 'react';

class Item extends PureComponent {
    toggle = () => {
        this.props.onToggle(this.props.item);
    };

    render() {
        const { item } = this.props;

        return (
            <div className="todo-item">
                <input type="text" defaultValue={item.name} />
                <input type="checkbox"
                    defaultChecked={item.isDone}
                    onChange={this.toggle} />
            </div>
        );
    }
}

export default Item;
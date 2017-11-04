import React, { Component, PureComponent } from 'react';

class ListView extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.list !== nextProps.list;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return !shallowEqual(this.props, newProps) 
    //         || !shallowEqual(this.state, newState);
    // }

    render() {
        const { list } = this.props;

        return (
            <div className="todo-list">
                {list.map(item => (
                    <div className="todo-item"
                        key={item.id}>
                        <input type="text" defaultValue={item.name} />
                        <input type="checkbox" defaultChecked={item.isDone} />
                    </div>
                ))}
            </div>
        );
    }
}

export default ListView;
import React, { PureComponent } from 'react';

import whyDidYouUpdate from '../../../utils/whyDidYouUpdate';

@whyDidYouUpdate
class ListView extends PureComponent {

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.list === prevProps.list);
    }

    render() {
        const { list, onToggle } = this.props;

        return (
            <div className="todo-list">
                {list.map(item => (
                    <div className="todo-item"
                        key={item.id}>
                        <input type="text" defaultValue={item.name} />
                        <input type="checkbox"
                            defaultChecked={item.isDone}
                            onChange={() => onToggle(item)} />
                    </div>
                ))}
            </div>
        );
    }
}

export default ListView;
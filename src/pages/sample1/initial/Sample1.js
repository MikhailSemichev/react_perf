import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadList1 } from '../../../store/list1';

@connect(
    state => ({
        list: state.list1
    }),
    { loadList1 }
)
class Sample1 extends Component {
    state = { itemText: '' };

    componentDidMount() {
        this.props.loadList1(3000);
    }

    changeItemText = e => {
        this.setState({ itemText: e.target.value });
    }

    render() {
        const { list } = this.props;
        const { itemText } = this.state;

        return (
            <div>
                Sample 1
                <div>
                    <input
                        type="text"
                        value={itemText}
                        onChange={this.changeItemText} />
                </div>
                <hr />
                <div className="todo-list">
                    {list.map(item => (
                        <div className="todo-item"
                            key={item.id}>
                            <input type="text" defaultValue={item.name} />
                            <input type="checkbox" defaultChecked={item.isDone} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Sample1;
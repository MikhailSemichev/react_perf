import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListView from './ListView';
import { loadList1, toggleTodo } from '../../../store/list1';

@connect(
  state => ({
    list: state.list1
  }),
  { loadList1, toggleTodo }
)
class Sample2 extends Component {
  state = { itemText: '' };

  componentDidMount() {
    this.props.loadList1(3000);
  }

  changeItemText = e => {
    this.setState({ itemText: e.target.value });
  };

  onToggle = item => {
    this.props.toggleTodo(item.id, !item.isDone);
  };

  render() {
    const { list } = this.props;
    const { itemText } = this.state;

    return (
      <div>
        Sample 2 [Optimized]
        <div>
          <input type="text"
            value={itemText}
            onChange={this.changeItemText} />
        </div>
        <hr />
        <ListView 
          list={list}
          onToggle={this.onToggle} />
      </div>
    );
  }
}

export default Sample2;
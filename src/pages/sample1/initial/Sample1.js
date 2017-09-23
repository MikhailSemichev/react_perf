import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loadList1} from '../../../store/list1';

@connect(
  state => ({
    list: state.list1
  }), 
  {loadList1}
)
class Sample1 extends Component {
  componentDidMount() {
    this.props.loadList1();
  }

  render() {
    return (
      <div>
        Sample 1
        <div>
          <code>{JSON.stringify(this.props.list)}</code>
        </div>
      </div>
    );
  }
}

export default Sample1;
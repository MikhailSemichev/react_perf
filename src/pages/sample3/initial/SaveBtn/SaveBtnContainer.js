import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveDate } from '../../../../store/date';

@connect(
    state => ({
        date: state.date
    }),
    { saveDate }
)
class SaveBtnContainer extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.saveDate}>
                    Save date {this.props.date}
                </button>
            </div>
        );
    }
}

export default SaveBtnContainer;
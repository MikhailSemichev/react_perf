import React, { Component } from 'react';

import ListContainer from './List/ListContainer';

class Sample2 extends Component {
    state = { itemText: '' };

    changeItemText = e => {
        this.setState({ itemText: e.target.value });
    };

    render() {
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
                <ListContainer />
            </div>
        );
    }
}

export default Sample2;
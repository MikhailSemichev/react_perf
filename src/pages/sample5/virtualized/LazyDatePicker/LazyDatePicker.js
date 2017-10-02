import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-bootstrap-date-picker';

class LazyDatePicker extends Component {
    state = { isClicked: false };

    onClick = () => {
        this.setState({ isClicked: true });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isClicked !== this.state.isClicked) {
            ReactDOM.findDOMNode(this.datepicker.refs.input).focus();
        }
    }

    render() {
        const { value } = this.props;
        const { isClicked } = this.state;

        if (!isClicked) {
             return (
                <span
                    onClick={this.onClick}
                    className="input-group">
                    <input type="text"
                        value={value}
                        placeholder="DD/MM/YYYY"
                        className="form-control" />
                    <span className="input-group-addon">
                        <div>×</div>
                    </span>
                </span>
            );
        } 

        return (
            <DatePicker
                value={value}
                ref={dp => this.datepicker = dp} />
        );
    }
}

export default LazyDatePicker;
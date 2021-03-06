import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(state => ({ 
    isSaving: state.isSaving 
}))
class SavingBlock extends Component {
    render() {
        return this.props.isSaving ? 
            <div className="saving-block">Saving...</div> 
            : null; 
    }
};

export default SavingBlock;
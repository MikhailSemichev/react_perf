import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'development') {
    let createClass = React.createClass;
    Object.defineProperty(React, 'createClass', {
        set: (nextCreateClass) => {
            createClass = nextCreateClass;
        }
    });
    const {whyDidYouUpdate} = require('why-did-you-update');
    whyDidYouUpdate(React);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

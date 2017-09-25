import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'development') {
    window.Perf = require('react-addons-perf');
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

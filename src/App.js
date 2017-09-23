import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import createAppStore from './store/createStore';

import Sample1 from './pages/sample1/initial/Sample1';
import Sample1_O from './pages/sample1/optimized/Sample1';

import './App.css';

const history = createHistory();
const store = createAppStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">

            <div className="menu">
              <Link to="/sample1">Sample 1</Link>
              <Link to="/sample1_o">Sample 1 (Optimized)</Link>
            </div>

            <div className="main">
              <Route path="/sample1" component={Sample1}/>
              <Route path="/sample1_o" component={Sample1_O}/>
            </div>

          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

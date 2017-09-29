import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import createAppStore from './store/createStore';

import Sample1 from './pages/sample1/initial/Sample1';
import Sample1_O from './pages/sample1/optimized/Sample1';

import Sample2 from './pages/sample2/initial/Sample2';
import Sample2_O from './pages/sample2/optimized/Sample2';
import Sample2_O2 from './pages/sample2/optimized2/Sample2';

import Sample3 from './pages/sample3/initial/Sample3';
import Sample3_O from './pages/sample3/optimized/Sample3';

import Sample4 from './pages/sample4/initial/Sample4';
import Sample4_O from './pages/sample4/optimized/Sample4';

import logo from './logo.svg';
import './App.scss';

const history = createHistory();
const store = createAppStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">

            <div className="menu">
              <img src={logo} className="app-logo" alt="logo" />

              <Link to="/sample1">Sample 1</Link>
              <Link to="/sample1_o">Sample 1 (Optimized)</Link>

              <Link to="/sample2">Sample 2</Link>
              <Link to="/sample2_o">Sample 2 (Optimized)</Link>
              <Link to="/sample2_o2">Sample 2 (Optimized 2)</Link>

              <Link to="/sample3">Sample 3</Link>
              <Link to="/sample3_o">Sample 3 (Optimized)</Link>

              <Link to="/sample4">Sample 4</Link>
              <Link to="/sample4_o">Sample 4 (Optimized)</Link>
            </div>

            <div className="main">
              <Route path="/sample1" component={Sample1} />
              <Route path="/sample1_o" component={Sample1_O} />
              <Route path="/sample2" component={Sample2} />
              <Route path="/sample2_o" component={Sample2_O} />
              <Route path="/sample2_o2" component={Sample2_O2} />
              <Route path="/sample3" component={Sample3} />
              <Route path="/sample3_o" component={Sample3_O} />
              <Route path="/sample4" component={Sample4} />
              <Route path="/sample4_o" component={Sample4_O} />
            </div>

          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;

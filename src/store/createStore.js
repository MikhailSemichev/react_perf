import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import list1 from './list1';
import list2 from './list2';
import filter from './filter';
import date from './date';

export default function createAppStore(history) {
    const middleware = [thunk, routerMiddleware(history)];
    const enhancers = [];
    let composeEnhancers = compose;

    if (process.env.NODE_ENV === 'development') {
        if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    return createStore(
        combineReducers({
            list1,
            list2,
            filter,
            date,
            router: routerReducer
        }),
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
};
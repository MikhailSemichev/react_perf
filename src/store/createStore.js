import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { batchedSubscribe } from 'redux-batched-subscribe';
import debounce from 'lodash/debounce';

import list1 from './list1';
import list2 from './list2';
import filter from './filter';
import date from './date';
import isSaving from './isSaving';

export default function createAppStore(history) {
    const middleware = [thunk, routerMiddleware(history)];
    let composeEnhancers = compose;

    if (process.env.NODE_ENV === 'development') {
        if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    const debounceNotify = debounce(notify => notify(), 10);
    const enhancers = []; // [batchedSubscribe(debounceNotify)];

    return createStore(
        combineReducers({
            list1,
            list2,
            filter,
            date,
            isSaving,
            router: routerReducer
        }),
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
};
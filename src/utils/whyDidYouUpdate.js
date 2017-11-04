/* eslint-disable no-console */
import _ from 'lodash';
import React, { Component } from 'react';

/**
 * Drop this decorator into a component that wastes time according to Perf.getWastedTime() to find
 * out what state/props should be preserved. Once it says "Update avoidable!" for {state, props},
 * you should be able to drop in PureComponent
 * source: https://gist.github.com/nuc/52bfc6e6f42d788d97327aad442bb1da
 *
 * @example <caption>Usage as decorator</caption>
 * @whyDidYouUpdate
 * class MyReactComponent extends Component { }
 *
 * @example <caption>Usage as function</caption>
 * export default whyDidYouUpdate(MyReactComponent)
 */
let firstLoad = true;

const whyDidYouUpdate = ComposedComponent => class extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (firstLoad) { 
            firstLoad = false; 
            return; 
        }
        
        deepDiff({ props: prevProps, state: prevState },
            { props: this.props, state: this.state },
            ComposedComponent.constructor.displayName || ComposedComponent.name);
    }

    render() {
        return <ComposedComponent {...this.props}/>;
    }
};

export default whyDidYouUpdate;

function isRequiredUpdateObject(o) {
    return Array.isArray(o) || (o && o.constructor === Object.prototype.constructor);
}

function deepDiff(o1, o2, p) {
    const notify = (status) => {
        console.warn('Update %s', status);
        console.log('%cbefore', 'font-weight: bold', o1);
        console.log('%cafter ', 'font-weight: bold', o2);
    };

    if (!_.isEqual(o1, o2)) {
        console.group(p);
        if ([o1, o2].every(_.isFunction)) {
            notify('avoidable?');
        } else if (![o1, o2].every(isRequiredUpdateObject)) {
            notify('required.');
        } else {
            const keys = _.union(_.keys(o1), _.keys(o2));

            for (const key of keys) {
                deepDiff(o1[key], o2[key], key);
            }
        }
        console.groupEnd();
    } else if (o1 !== o2) {
        console.group(p);
        notify('avoidable!');
        if (_.isObject(o1) && _.isObject(o2)) {
            const keys = _.union(_.keys(o1), _.keys(o2));

            for (const key of keys) {
                deepDiff(o1[key], o2[key], key);
            }
        }
        console.groupEnd();
    }
}

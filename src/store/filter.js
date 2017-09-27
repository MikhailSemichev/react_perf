import service from '../api/service';

export const SET_FILTER = 'SET_FILTER';

export function setFilter(filter) {
    return dispatch => dispatch({ type: SET_FILTER, payload: filter });
};

export default function filter(state = '', action) {
    if (action.type === SET_FILTER) {
        return action.payload;
    }
    return state;
};
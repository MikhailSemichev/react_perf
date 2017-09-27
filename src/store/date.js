import service from '../api/service';

export const SAVE_DATE = 'SAVE_DATE';

export function saveDate() {
    return dispatch => dispatch({ 
        type: SAVE_DATE, 
        payload: new Date().toLocaleTimeString()
    });
};

export default function filter(state = '', action) {
    if (action.type === SAVE_DATE) {
        return action.payload;
    }
    return state;
};
import service from '../api/service';

export const LOAD_LIST1 = 'LOAD_LIST1';

export function loadList1() {
    return dispatch => {
        return service.request(fakeData()).then(data => {
            return dispatch({ type: LOAD_LIST1, payload: data });
        });
    };
};

export default function list1 (state = [], action) {
    if (action.type === LOAD_LIST1) {
        debugger;
        return action.payload;
    }
    return state;
};

///

function fakeData() {
    return [1, 2, 3];
}
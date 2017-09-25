import service from '../api/service';

export const LOAD_LIST1 = 'LOAD_LIST1';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function loadList1(count) {
    return dispatch => {
        return service.request(fakeData(count)).then(data => {
            return dispatch({ type: LOAD_LIST1, payload: data });
        });
    };
};

export function toggleTodo(id, isDone) {
    return dispath => {
        return service.request({ id, isDone }).then(data => {
            return dispath({ type: TOGGLE_TODO, payload: data });
        });
    };
};

export default function list1(state = [], action) {
    if (action.type === LOAD_LIST1) {
        return action.payload;
    }
    if (action.type === TOGGLE_TODO) {
        return state.map(item => {
            if (item.id === action.payload.id) {
                return { ...item, isDone: action.payload.isDone };
            }
            return item;
        });
    }
    return state;
};

///

function fakeData(count) {
    let result = [];

    for (let i = 0; i < count; i++) {
        result.push({
            id: i + 1,
            name: `Todo Item ${i + 1}`,
            isDone: i % 3 === 0
        });
    }

    return result;
}
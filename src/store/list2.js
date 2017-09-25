import service from '../api/service';

// BEFORE
/*
state = {
    list1: [
        {id, name, isDone}
        {id, name, isDone = !isDone} <= TOGGLE_TODO
        {id, name, isDone}
        {id, name, isDone}
    ]
}

list1 = list1.map(item => {
    if (item.id === action.payload.id) {
        return { ...item, isDone: action.payload.isDone };
    }
    return item;
});
*/

// AFTER
/*
state = {
    list2: {
        ids: [1, 2, 3, 4],
        values: {
            '1': {id, name, isDone}
            '2': {id, name, isDone = !isDone} <= TOGGLE_TODO
            '3': {id, name, isDone}
            '4': {id, name, isDone}
        }
    }
*/

export const LOAD_LIST2 = 'LOAD_LIST2';
export const TOGGLE_TODO2 = 'TOGGLE_TODO2';

export function loadList(count) {
    return dispatch => {
        return service.request(fakeData(count)).then(data => {
            return dispatch({ type: LOAD_LIST2, payload: data });
        });
    };
};

export function toggleTodo(id, isDone) {
    return dispath => {
        return service.request({ id, isDone }).then(data => {
            return dispath({ type: TOGGLE_TODO2, payload: data });
        });
    };
};

const initialState = {
    ids: [],
    values: {}
};

export default function list2(state = initialState, action) {
    if (action.type === LOAD_LIST2) {
        const list = action.payload;
        const ids = [];
        const values = {};

        list.forEach(item => {
            ids.push(item.id);
            values[item.id] = item;
        });

        return { ids, values };
    }
    if (action.type === TOGGLE_TODO2) {
        const { id, isDone } = action.payload.id;
        const item = state.values[id];

        return {
            ...state,
            values: {
                ...state.values,
                [id]: { ...item, isDone }
            }
        };
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
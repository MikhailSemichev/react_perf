export const LOAD_LIST1 = 'LOAD_LIST1';

export default function list1 (state = [], action) {
    if (action.type === LOAD_LIST1) {
        return [1,2,3];
    }

    return state;
};
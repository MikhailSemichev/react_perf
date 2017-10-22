export const SET_IS_SAVING = 'SET_IS_SAVING';

export function setIsSaving(isSaving) {
    return { 
        type: SET_IS_SAVING, 
        payload: isSaving
    };
};

export default function isSaving(state = false, action) {
    if (action.type === SET_IS_SAVING) {
        return action.payload;
    }
    return state;
};
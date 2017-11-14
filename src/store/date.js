import service from '../api/service';
import { setIsSaving } from './isSaving';

export const SAVE_DATE = 'SAVE_DATE';

export function saveDate() {
    return dispatch => {
        dispatch(setIsSaving(true));

        return service.request('saveDate')
            .then(() => {
                dispatch({ 
                    type: SAVE_DATE, 
                    payload: new Date().toLocaleTimeString()
                });

                dispatch(setIsSaving(false));
            }, () => {
                dispatch(setIsSaving(false));
            });
    };
};

export default function filter(state = '', action) {
    if (action.type === SAVE_DATE) {
        return action.payload;
    }
    return state;
};
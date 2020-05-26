import { SET_USER } from '../types';

export const authAction = (user?: any) => {
    return async (dispatch: any, getState: any) => {
        dispatch({ type: SET_USER, payload: 'user' });
    }
};
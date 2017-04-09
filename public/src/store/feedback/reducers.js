import _ from 'lodash';

export const feedback = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        return {
            ...state,
            ...action.payload
        }
    }
    if (action.type === 'REJECT_FEEDBACK') {
        return _.filter(state, (el) => {
            return el.id !== action.id
        });
    }
    if (action.type === 'ACCEPT_FEEDBACK') {
        return _.filter(state, (el) => {
            return el.id !== action.id
        });
    }
    return state;
}

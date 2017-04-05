export const feedback = (state = {}, action) => {
    if(action.type === 'SET_FEEDBACK'){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}

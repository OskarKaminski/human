export const feedback = (state = {}, action) => {
    if(action.type === 'PUT_FEEDBACK'){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}

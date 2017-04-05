export const currentUser = (state = {}, action) => {
    if(action.type === 'SET_CURRENT_USER'){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
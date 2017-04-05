export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
})

export const fetchCurrentUser = (authId) => ({
    type: 'FETCH_CURRENT_USER',
    authId
})

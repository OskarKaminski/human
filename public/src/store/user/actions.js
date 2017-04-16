export const setCurrentUser = (user) => ({
    type: 'SET_CURRENT_USER',
    payload: user
})

export const fetchCurrentUser = (authId) => ({
    type: 'FETCH_CURRENT_USER',
    authId
})

export const getUser = (id) => ({
    type: 'GET_USER',
    id
})

export const fetchUsers = (groupId) => ({
    type: 'FETCH_USERS',
    groupId
})

export const setUsers = (users) => ({
    type: 'SET_USERS',
    payload: users
})

export const setFeedback = (feedback) => ({
    type: 'SET_FEEDBACK',
    payload: feedback
})

export const fetchFeedback = (userId) => ({
    type: 'FETCH_FEEDBACK',
    userId
})

export const acceptFeedback = (id) => ({
    type: 'ACCEPT_FEEDBACK',
    id
})

export const rejectFeedback = (id) => ({
    type: 'REJECT_FEEDBACK',
    id
})

export const sendFeedback = (feedback, senderId, recipientId) => ({
    type: 'SEND_FEEDBACK',
    payload: {feedback, senderId, recipientId}
})

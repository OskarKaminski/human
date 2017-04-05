export const setFeedback = (feedback) => ({
    type: 'SET_FEEDBACK',
    payload: feedback
})

export const fetchFeedback = (userId) => ({
    type: 'FETCH_FEEDBACK',
    userId
})

export const sendFeedback = (feedback, senderId, recipientId) => ({
    type: 'SEND_FEEDBACK',
    payload: {feedback, senderId, recipientId}
})

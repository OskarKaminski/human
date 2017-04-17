import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {setFeedback} from './actions';
import {hideMarshall} from '../../pages/profile/actions';

export const getCommissions = async (userId) => {
    const commissions = await axios.get(`http://localhost:5000/api/feedback/${userId}`);
    return commissions.data;
};

function* fetchFeedback(action) {
    const feedback = yield call(getCommissions, action.userId);
    yield put(setFeedback(feedback));
}

function* acceptFeedback(action) {
    const feedback = yield axios.put(`http://localhost:5000/api/feedback/${action.id}/accept`)
    return feedback;
}

function* rejectFeedback(action) {
    const feedback = yield axios.put(`http://localhost:5000/api/feedback/${action.id}/reject`)
    return feedback;
}

function* sendFeedback(action) {
    const feedback = yield axios.post(`http://localhost:5000/api/feedback`, action.payload)
    yield put(hideMarshall())
    return feedback;
}

export const fetchFeedbackSaga = function* fetchFeedbackSaga() {
    yield takeLatest('FETCH_FEEDBACK', fetchFeedback);
    yield takeLatest('ACCEPT_FEEDBACK', acceptFeedback);
    yield takeLatest('REJECT_FEEDBACK', rejectFeedback);
    yield takeLatest('SEND_FEEDBACK', sendFeedback);
};

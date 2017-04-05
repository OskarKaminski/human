import { call, put, takeLatest } from 'redux-saga/effects';
import {get} from 'axios';
import {setFeedback} from './actions';

export const getCommissions = async (userId) => {
    const commissions = await get(`http://localhost:5000/api/feedback/${userId}`);
    return commissions.data;
};

function* fetchFeedback(action) {
    const feedback = yield call(getCommissions, action.userId);
    yield put(setFeedback(feedback));
}

export const fetchFeedbackSaga = function* fetchFeedbackSaga() {
    yield takeLatest('FETCH_FEEDBACK', fetchFeedback);
};
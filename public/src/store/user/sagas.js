import { call, put, takeLatest } from 'redux-saga/effects';
import {get} from 'axios';
import {setCurrentUser} from './actions';

export const getUser = async (authId) => {
    const user = await get(`http://localhost:5000/api/user/${authId}`);
    return user.data;
};

function* fetchCurrentUser(action) {
    const feedback = yield call(getUser, action.authId);
    yield put(setCurrentUser(feedback));
}

export const fetchCurrentUserSaga = function* fetchFeedbackSaga() {
    yield takeLatest('FETCH_CURRENT_USER', fetchCurrentUser);
};

import { call, put, takeLatest } from 'redux-saga/effects';
import {get} from 'axios';
import {setCurrentUser, setUsers} from './actions';

export const getUser = async (authId) => {
    const user = await get(`http://localhost:5000/api/current-user/${authId}`);
    return user.data;
};

export const getUsers = async (groupId) => {
    const users = await get(`http://localhost:5000/api/users/${groupId}`);
    return users.data;
};

function* fetchCurrentUser(action) {
    const feedback = yield call(getUser, action.authId);
    yield put(setCurrentUser(feedback));
}

function* fetchUsers(action) {
    const users = yield call(getUsers, action.groupId);
    yield put(setUsers(users));
}

export const fetchCurrentUserSaga = function* fetchFeedbackSaga() {
    yield takeLatest('FETCH_CURRENT_USER', fetchCurrentUser);
    yield takeLatest('GET_USER', getUser);
    yield takeLatest('FETCH_USERS', fetchUsers);
};

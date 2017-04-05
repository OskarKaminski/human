import createSagaMiddleware from 'redux-saga';
import {fetchFeedbackSaga} from './feedback/sagas';
import {fetchCurrentUserSaga} from './user/sagas';

export const sagaMiddleware = createSagaMiddleware();

export const runner = () => {
    sagaMiddleware.run(fetchFeedbackSaga);
    sagaMiddleware.run(fetchCurrentUserSaga);
};

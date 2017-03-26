import createSagaMiddleware from 'redux-saga';
import {fetchFeedbackSaga} from './feedback/sagas';

export const sagaMiddleware = createSagaMiddleware();

export const runner = () => {
    sagaMiddleware.run(fetchFeedbackSaga);
};

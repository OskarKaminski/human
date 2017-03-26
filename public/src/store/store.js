import {applyMiddleware, createStore} from 'redux';
import {feedback} from './feedback/reducers';
import * as sagas from './sagasLoader';

const middleware = applyMiddleware(sagas.sagaMiddleware);
const reducers = feedback;

export const store = createStore(reducers, middleware);
sagas.runner();

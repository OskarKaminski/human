import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import {feedback} from './feedback/reducers';
import {currentUser, users} from './user/reducers';
import {overlays} from './overlays/reducers';
import * as sagas from './sagasLoader';

let devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : f => f;

const middleware = applyMiddleware(sagas.sagaMiddleware);
const reducers = combineReducers({
    feedback,
    currentUser,
    users,
    overlays
});

export const store = createStore(reducers, compose(middleware, devtools));
sagas.runner();

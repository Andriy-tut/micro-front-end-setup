import { combineReducers, createStore, applyMiddleware } from 'redux';

import session from './session/reducer';

const middleware = applyMiddleware();
const rootReducer = combineReducers({ session });

export default createStore(rootReducer, undefined, middleware);

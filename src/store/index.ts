import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import session from './session/reducer';

const middleware = applyMiddleware();
const rootReducer = combineReducers({ session });

export default createStore(rootReducer, undefined, composeWithDevTools(middleware));

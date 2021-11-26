import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import session from './session/reducer';

const middleware = applyMiddleware();
// @ts-ignore
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composedEnhancers = compose(middleware, devtools)

const rootReducer = combineReducers({ session });

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;

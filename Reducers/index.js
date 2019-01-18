import { combineReducers, createStore } from 'redux';

import loginReducer from './LoginReducer'

const AppReducers = combineReducers({
    loginReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;

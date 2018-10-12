// store.js
import {createStore, 
        combineReducers, 
        applyMiddleware
    } from 'redux';

import counterReducer from './state/reducers/counterReducer';
import cartReducer from './state/reducers/cartReducer';


function loggerMiddleware(store) {
    return function(nextFn) {
        return function(action) {
            console.log('LOGGER ', action);
            return nextFn(action);
        }
    }
}

const rootReducer = combineReducers({
    // stateName: reducer function
    counter: counterReducer,
    items: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
// store.js
import {createStore, 
        combineReducers} from 'redux';

import counterReducer from './state/reducers/counterReducer';
import cartReducer from './state/reducers/cartReducer';

const rootReducer = combineReducers({
    // stateName: reducer function
    counter: counterReducer,
    items: cartReducer
});

const store = createStore(rootReducer);

export default store;
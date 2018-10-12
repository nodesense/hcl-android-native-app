// state/reducers/counterReducer.js

import * as ActionTypes from '../action-types';
const INITIAL_STATE = 0;
// one reducer per file, default export
// Pure function
export default function counterReducer(state = INITIAL_STATE, 
                                        action) {
    console.log('counterReducer', "State => ", state, "action => ", action);
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return state + action.payload.value; // immutable

        case ActionTypes.DECREMENT:
            return state - action.payload.value; // immutable

        
        case ActionTypes.RESET:
            return INITIAL_STATE; // immutable

         
        default:
            return state;
    }
}
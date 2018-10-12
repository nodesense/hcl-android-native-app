// actions.js

import * as ActionTypes from './action-types';

// action creators - helper method, 
// create and return action object
//es5
// return action object with type and payload
export function increment(value) {
    console.log('increment action creator called ', value)
    return {
        type: ActionTypes.INCREMENT,
        payload: {
            value
        }
    }
}

// action creator es6 style
// return action object with type and payload
export const decrement = (value) => ({
    type: ActionTypes.DECREMENT,
    payload: {value}
})
 
export const reset = () => ({
    type: ActionTypes.RESET
});

// cart feature, if cart is a module
// cart/state/actions.js

export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        item
    }
});

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        id
    }
})

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,
        qty
    }
})

export const empty = () => ({
    type: ActionTypes.EMPTY_CART
})
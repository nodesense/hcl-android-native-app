// cartReducer.js
import * as ActionTypes from "../action-types";

const INITIAL_STATE = [];
 
export default function cartReducer(state = INITIAL_STATE,
                                   action) {

    console.log("cartReducer called ", "State =>", state, "Action => ", action);

    switch(action.type) {
        case ActionTypes.ADD_ITEM: {
            //check if item exists
            //if item doesn't exist add to list.
            let item = state.find( item => item.id == action.payload.item.id);
            if (!item) { //item not found, add here
                return [...state, action.payload.item]
            }

            //if item already exists, increment quantity

            return state.map ( item => {
                if (item.id != action.payload.item.id) 
                    return item;

                return {...item, qty: item.qty + action.payload.item.qty};
            })
        }

        case ActionTypes.REMOVE_ITEM: 
            return state.filter(item => item.id != action.payload.id)

        case ActionTypes.UPDATE_ITEM: {
            return state.map( item => {
                if (item.id != action.payload.id) 
                    return item;
                
                return {...item, qty: action.payload.qty};
            })
        }

        case ActionTypes.EMPTY_CART: 
            return []

        default: 
            return state;
    }

}
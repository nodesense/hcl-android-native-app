// ReduxCounter.js
import React from 'react';

import {View, Text, Button, Alert} from 'react-native';

import store from '../store';
import * as actions from '../state/actions';

// demonstration
export default class ReduxCounter extends React.Component{
    constructor(props) {
        super(props);
    }
   
    increment = () => {
        // returns action object 
        const action = actions.increment(1);
        // calls reducer internally
        // sync
        console.log("Counter Before ", store.getState())
        store.dispatch(action)
        console.log("Counter After ", store.getState())
    }

    decrement = () => {
        //TODO:
    }

    reset = () => {
        // TODO:
       // store.dispatch({type: 'SYSTEM_RESET'})
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            console.log('ReduxCounter subscribe');
            this.forceUpdate(); //trigger render method
        })
    }

    componentWillUnmount() {
        this.unsubscribe (); // cancel redux subscription
    }
    
    render() {
        console.log('ReduxCounter render');

        const state = store.getState();
        const counter = state.counter;

        return (
            <View>
                <Text style={ {fontSize: 30}}> Redux Counter </Text>
 
                <Text style={ {fontSize: 20}}>  Counter {counter}</Text>

                <Button onPress={this.increment}
                        title='Incr'
                ></Button>


                <Button onPress={this.decrement}
                        title='Decr'
                ></Button>

                <Button onPress={this.reset}
                        title='Reset'
                ></Button>
                

            </View>
        )
    }
}
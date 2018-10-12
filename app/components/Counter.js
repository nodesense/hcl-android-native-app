// Counter.js
import React from 'react';

import {View, Text, Button, Alert} from 'react-native';

// class Component
// Props are read only, immutable
// React create instance for class component
export default class Counter extends React.Component{
    constructor() {
        super();

        // keyword
        // counter value can be changed
        // mutable 
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        console.log("Counter componentDidMount")
        this.timer = setInterval(() => {
            console.log('Timer called ')
            this.setState({
                counter: this.state.counter + 1
            })
        }, 2000);
    }

    componentWillUnmount() {
        console.log("Counter componentWillUnmount")
        clearInterval(this.timer);
    }

    // ES.NEXT
    // invoked by react context on click
    // this, we use =>
    increment = () => {
        Alert.alert('Increment');

        //BAD, synchornously updating state
        // CRASH, this.state is undefined
        this.state.counter++;

        // we need to call render method to update latest
        // keyword
        // trigger render method call
        this.forceUpdate(); 
    }

    decrement = () => {
        // GOOD

        // react keyword
        // async*
        // trigger render method after updating state 
        console.log('counter before ', this.state.counter);
        const counter = this.state.counter - 1
        this.setState({
            counter: counter
        }, () => {
            // callback, called after render
            console.log('SetState callback')
            console.log('counter ', this.state.counter);
            // business logic
            //setState
        })
         
        // Business logic using counter, not using this.state.counter
        console.log('counter after ', this.state.counter);
    }

    // react keyword
    // create virtual dom and return v.dom
    render() {
        // deconstruct
        // this refers to Counter component
        // props is a keyword
        console.log('Counter render', this.state.counter);

        const {startValue} = this.props;
 
        return (
            <View>
                <Text>Counter {this.state.counter} </Text>
                <Text>Start Value {startValue}</Text>
                <Button onPress={this.increment }
                        title="Incr" />

                <Button onPress={this.decrement }
                        title="Decr" />

            </View>
        )
    }
}
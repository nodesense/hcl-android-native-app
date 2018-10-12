// Template.js
import React from 'react';

import {View, Text, Button, Alert} from 'react-native';
 
export default class Template extends React.Component{
    constructor(props) {
        super(props);
    }
   
    render() {
        console.log('Template render');
 
        return (
            <View>
                <Text style={ {fontSize: 30}}> Template </Text>
 
            </View>
        )
    }
}
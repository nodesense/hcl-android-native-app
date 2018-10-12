// app/components/About.ios.js
import React from 'react';

import {View, Text, Button, Alert} from 'react-native';
 
export default class About extends React.Component{
    constructor(props) {
        super(props);
    }
   
    render() {
        console.log('About iOS render');
 
        return (
            <View>
                <Text style={ {fontSize: 30}}> About iOS </Text>
 
            </View>
        )
    }
}
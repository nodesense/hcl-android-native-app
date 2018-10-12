// app/components/About.android.js
import React from 'react';

import {View, Text, Button, Alert, Image, ScrollView} from 'react-native';
 
export default class About extends React.Component{
    constructor(props) {
        super(props);
    }
   
    render() {
        console.log('About Android render');
 
        return (
            <View>
                <Text style={ {fontSize: 30}}> About Android </Text>

                <Image source={require('../../assets/assistant.png')} />

 
            </View>
        )
    }
}
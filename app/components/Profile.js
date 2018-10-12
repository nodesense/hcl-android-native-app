// Profile.js
import React from 'react';

import {View, Text, Button, 
        Alert, 
        StyleSheet, Image} from 'react-native';
 
export default class Profile extends React.Component{

    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/assistant.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    constructor(props) {
        super(props);
    }
   
    render() {
        console.log('Profile render');
 
        return (
            <View>
                <Text style={ {fontSize: 30}}> Profile </Text>
 
            </View>
        )
    }
}


const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
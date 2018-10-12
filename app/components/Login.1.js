// Template.js
import React from 'react';

import {View, Text, Button, Alert, Image} from 'react-native';
 
class LogoTitle extends React.Component {
    render() {
      return (
          <View style={ {flex: 1, flexDirection: 'row'}}>
              <Text>Login 2</Text>
            <Image
            source={require('../../assets/assistant.png')}
            style={{ width: 30, height: 30 }}
            />
        </View>
      );
    }
  }

export default class Login extends React.Component{
    static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
    };
    
    constructor(props) {
        super(props);
         
    }
    

    render() {
        console.log('Login render');
 
        return (
            <View>
                <Text style={ {fontSize: 30}}> Login </Text>
 
            </View>
        )
    }
}
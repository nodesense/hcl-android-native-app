// Profile.js
import React from 'react';

import {View, Text, Button, 
        Alert, 
        StyleSheet, Image} from 'react-native';


import {Badge, CheckBox} from 'react-native-elements';

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    }

    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/assistant.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
 
    render() {
        console.log('Profile ');
 
        return (
            <View>
                <Text style={ {fontSize: 30}}> Profile </Text>
 
                <Badge
                    value={3}
                    textStyle={{ color: 'white' }}

                    width={50}


                    />

                    <CheckBox
                        center
                        title='Click Here'
                        checked={this.state.checked}
                        onPress = { () => this.setState({checked: !this.state.checked})}

                        />

                        <CheckBox
                        center
                        title='Click Here'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.checked}
                        onPress = { () => this.setState({checked: !this.state.checked})}

                        />


                <CheckBox
                    center
                    title='Task 1'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                    onPress = { () => this.setState({checked: !this.state.checked})}

                    />
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
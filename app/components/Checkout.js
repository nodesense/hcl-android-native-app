// Checkout.js
import React from 'react';

import {View, Text, Button, Alert} from 'react-native';
 
export default class Checkout extends React.Component{

    // static navigationOptions = {
    //     title: 'Checkout'
    // }

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('pageTitle', 'A Checkout'),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        };
      };

    constructor(props) {
        super(props);
    }
   
     

    render() {
        // To get the all params from navigation
        console.log('Checkout render', this.props.navigation.state.params);


        const coupon = this.props.navigation.getParam('coupon', 'Save0');
        const address = this.props.navigation.getParam('address', { city: 'unknown'} );
        

        return (
            <View>
                <Text style={ {fontSize: 30}}> Checkout </Text>

                <Text> Coupon: {coupon}</Text>

                <Text> City: {address.city}</Text>

                <Button onPress={() => {
                        this.props.navigation.setParams({pageTitle: 'Updated!'})
                    } }
                    title="Update"
                    >
                        
                </Button>
 
 
            </View>
        )
    }
}
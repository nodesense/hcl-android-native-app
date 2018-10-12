// Checkout.js
import React from 'react';

import {View, 
        Text, 
        Button, 
        Alert,
        TextInput
    } from 'react-native';

import { FormLabel, 
         FormInput, 
         FormValidationMessage } from 'react-native-elements'

import {NativeModules} from 'react-native';

import ButtonView from './ButtonView';

// ToastExample MUST match getName() in Java Module
const ToastExample = NativeModules.ToastExample; 

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

        this.state = {
            fullName: '',
            address: '',
            addressError: true,
            shipToOffice: true
        }
    }
   
    onNameChange = (value) => {
        console.log('value in input ', value);
        this.setState({
            fullName: value
        })
    }


    onAddressChange = (value) => {
        console.log('address in input ', value);
        this.setState({
            address: value,
            addressError: value.length <3 ? true: false
        })
    }

    showToast = () => {
        ToastExample.show("Hello from JS ", 5000);
    }
     
    addStrings = () => {
        ToastExample.addTwoString("Hello", "world")
                    .then (result => {
                        ToastExample.show(result, 15000);
                    })
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

                <Text>Full Name</Text>
                <TextInput value={this.state.fullName} 
                           onChangeText= {this.onNameChange}
                />
                {/*
                <FormLabel>Address </FormLabel>
                <FormInput 
                            value={this.state.address}
                            onChangeText={this.onAddressChange}/>

                {!this.state.addressError && 
                    <FormValidationMessage>Address should be 3 chars</FormValidationMessage>
                }*/}
                
                <Button onPress={() => {
                        this.props.navigation.setParams({pageTitle: 'Updated!'})
                    } }
                    title="Update"
                    >
                        
                </Button>

                <Button onPress={this.showToast} title="show toast">
                </Button>

                <Button onPress={this.addStrings} title="Add str">
                </Button>

                <ButtonView style= { { height: 100, width: 100} }  />

                <ButtonView style= { { height: 100, width: 100} } 
                            textTitle ="Hello Android" />

 
            </View>
        )
    }
}
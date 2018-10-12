// Address.js
import React from 'react';

import {View, Text} from 'react-native';
// Functional component

// create and return v.doms
// react just call this function
// props are passed from parent
// Props are read only, immutable
export default function Address(props) {
    // deconstruct
    const {title, address } = props;
    //const title = props.title;
    //const address = props.address;

    return (
        <View>
            <Text>{title}</Text>
            <Text>Street: {address.street} </Text>
            <Text>City: {address.city} </Text>
            <Text>State: {address.state} </Text>
            <Text>Pincode: {address.pincode} </Text>
        </View>
    )
}
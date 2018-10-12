// components/Cart.js
import React from 'react';
import {View, Button, 
        Text, Alert,
        StyleSheet
    } from 'react-native';

import CartList from './CartList';

export default function Cart(props) {
        console.log('Cart render');
        return (
            <View style= { styles.container } >
                <View style= { styles.actions } >

                    <Button title="Add"
                             style= {styles.button}
                            onPress={props.addRandomItem} />

                    <Button title="Empty"
                             style= {styles.button}
                            onPress={props.actions.empty} 
                             />
 
                    
                    <Button title="Checkout"
                             style= {styles.button}
                            onPress={() => props.navigation.navigate("Checkout")} />

                </View>
                {/* JSX comment */}
                <View  style = {styles.cartList} >
                    <CartList items={props.items}  
                              removeItem={props.actions.removeItem}
                              updateItem={props.actions.updateItem}
                    />
                </View>
            </View>
        )
}

 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },

    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'lightgrey',
        borderBottomWidth: 2,
        marginTop: 8
    },

    cartList: {
        flex: 9
    },

    button : {
        height: 30,
        width: 120
    }
})
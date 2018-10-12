// Cart.js
import React from 'react';
import {View, Button, 
        Text, Alert,
        StyleSheet
    } from 'react-native';

import CartList from './CartList';

export default class Cart extends React.Component {

    static navigationOptions = {
        title: 'Cart'
    }
    

    constructor() {
        super();

        this.state = {
            items: [
                {id: 1, name: 'Product 1', price: 100, qty: 1}
            ],
            amount: 0, 
            totalItems: 0
        }

        // for (let id = 3; id < 1000; id++) {
        //     const item = {
        //         id: id, 
        //         name: 'Product ' + id,
        //         price: Math.ceil(Math.random() * 100),
        //         qty: 1
        //     }
        //     this.state.items.push(item);
        // }

    }

    addItem = () => {
        let id = Math.ceil(10000 + Math.random() * 10000);
        const item = {
            id: id, 
            name: 'Product ' + id,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }
        //TODO
        // React is a view lib, 
            // compare virtual dom
        // Model? Data, compare models
        // Good
        // Immutable

        const items = [...this.state.items, item]
         
        // set the next items, 
        // call render method
        this.setState({
            items: items
        })
    }

    empty = () => {
        //TODO
        const items = [];
        this.setState({
            items: items
        })
    }
    
    dummy = () => {
        //TODO
        this.setState({
            flag: true
        })
    }

    checkout = () => {
        this.props.navigation.navigate("Checkout")
    }

    componentWillUnmount() {
        console.log('**Cart Unmounting ')
    }

    // child to parent
    // callback
    // parent shall pass a function to child as prop
    // child shall call parent function
    removeItem = (id) => {
        console.log('removeitem called', id);
        //return all the items except one with id ==
        const items = this
                     .state.items.filter(item => item.id != id);

        this.setState({items: items});
    }

    updateItem = (id, qty) => {
        console.log('updateItem called', id, qty);
        //TODO
        const items = this.state.items.map (item => {
            if (item.id == id) {
               return {...item, qty: qty}
            }

            return item;
        })

        this.setState({items})
    }

    render() {
        console.log('Cart render');
        return (
            <View style= { styles.container } >
                <View style= { styles.actions } >

                    <Button title="Add"
                             style= {styles.button}
                            onPress={this.addItem} />

                    <Button title="Empty"
                             style= {styles.button}
                            onPress={this.empty} 
                             />

                    <Button title="Press"
                                 style= {styles.button}
                                 onPress={this.dummy} 
                              />

                    
                    <Button title="Checkout"
                             style= {styles.button}
                            onPress={this.checkout} />

                </View>
                {/* JSX comment */}
                <View  style = {styles.cartList} >
                    <CartList items={this.state.items}  
                              removeItem={this.removeItem}
                              updateItem={this.updateItem}
                    />
                </View>
            </View>
        )
    }
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
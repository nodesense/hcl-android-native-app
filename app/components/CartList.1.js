// CartList.js
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CartItem from './CartItem';

export default class CartList extends React.Component {
    constructor() {
        super();
    }

    // whenever parent render called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log('CartList componentWillReceiveProps')
        console.log("nextProps Items length ", nextProps.items.length);
        console.log("this.props.items.length", this.props.items.length);
    }

    //whenever parent render called on update cycle
    //whenever this.setState on update cycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log('CartList shouldComponentUpdate');
        console.log('nextProps.items != this.props.items ', 
        nextProps.items != this.props.items);

        return  nextProps.items != this.props.items; 
        // return true; // calls render
        // return false; //doesn't call render
    }
 
    render() {
        console.log('CartList render');
        const {items,
                removeItem} = this.props;

        // inside JSX/XML, we cannot write statements for, while, if
        // but can write expressions
        return (
            <View>
               <ScrollView>
                {
                    items.map (item => (
                        <CartItem item={item} 
                                  key={item.id} 
                                  removeItem={removeItem}
                                  updateItem={this.props.updateItem}
                                  
                                  />
                    ))
                }

               </ScrollView>
               
            </View>
        )
    }
}
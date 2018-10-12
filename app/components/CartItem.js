// CartItem.js
import React from 'react';
import {View, Button, 
        Text, Alert,
        StyleSheet,
        Slider
    } from 'react-native';

// PureComponent 
// is has shouldComponentUpdate already implemented
// shallow compare: check two references
// compares nextProps with this.props
// compare nextState with this.state
// return true if any difference, then it call render
// return false if no difference, then no render call

export default class CartItem extends React.PureComponent {
    constructor() {
        super();
        console.log('CartItem cons')
    }

    componentWillMount() {
        console.log('CartItem will mount called');
    }

    componentDidMount() {
        console.log('CartItem did mount');
    }
 
    componentWillUnmount() {
        console.log('CartItem will unmount');
    }

    

    render() {
        const {item} = this.props ;
        console.log('CartItem render', item.id);

        return (
            <View  style = {styles.container} >
                <View style = {styles.details} >
                <Text style = { {paddingLeft: 10}  } > {item.name}</Text>
                <Text style={ { fontWeight: 'bold'  } }> ${item.price}</Text>
                <Text  style = { {paddingRight: 10}  }> Qty: {item.qty}</Text>
                </View>
                <View  style = {styles.actionButtons} >
                    <Button   onPress={ () => this.props.removeItem(item.id)   }
                            title="Remove" />
                     <Slider style={styles.slider}
                            onValueChange={ (value) => { this.props.updateItem(item.id, value)  } } 
                            value={item.qty}
                            step={1}

                            minimumValue={1}
                            maximumValue={10} />
                </View>
            </View>
        )
    }
}
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderBottomWidth: 1
    },

    details: {
        flex: 2,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        //marginLeft: 10,
        //marginRight: 10,
        paddingTop: 10
    },

    actionButtons: {
        flex: 1,
        flexDirection: 'row'
    },
    slider: {
        flex: 2
    }
});

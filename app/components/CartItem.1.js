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

    onQtyChange = (value) => {
        console.log(value);
        this.props.updateItem(this.props.item.id, 
                                value)

    }

    render() {
        const {item} = this.props ;
        console.log('CartItem render', item.id);

        return (
            <View style={styles.container}>
                <View style={styles.details}>
                <Text style={styles.title}> {item.name}</Text>
                <Text style={styles.price} > ${item.price}</Text>
                <Text style={styles.qty}> Qty: {item.qty}</Text>
                </View>
                <View  style={styles.actions}>
                    <Button style={styles.removeBtn} onPress={ () => this.props.removeItem(item.id)   }
                            title="Remove" />
                    <Slider style={styles.slider}
                            onValueChange={this.onQtyChange} 
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
        marginTop: 10,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    details: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10
    },
    title: {
        flex: 3
    }, 
    price: {
        flex: 1,
        fontWeight: 'bold'
    },
    qty: {
        flex: 1
    }, 
    actions: {
        flex: 1,
        flexDirection: 'row'
    },
    removeBtn: {
        flex: 1
    },
    slider: {
        flex: 2
    }
});
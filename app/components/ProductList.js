// ProductList.js
import React from 'react';

import {View, Text, 
        Button, 
        Alert, FlatList} from 'react-native';

// functional component
const ProductItem = ( {item} ) => (
    <View>
        <Text>{item.name}</Text>
    </View>
);


export default class ProductList extends React.Component{
    static navigationOptions = {
        title: 'Product List'
    }
    constructor(props) {
        
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        console.log('Start ProductList componentDidMount')
        const url = "https://nodesense.github.io/api/products.json";

        fetch('http://api.nodesense.ai/api/products')
        .then (response => {
            console.log('response ', response);
            return response.json(); // parse json data, return a promise
        })
        .then (products => {
            console.log('got products ', products.length);
            this.setState({ products }) // es6, products: products
        })

        console.log('End ProductList componentDidMount')
    }

    // for every item, this function is called
    // this should return unique key, <   key={id}
    productKeyExtractor = (item, index) => item.id.toString()

   
    render() {
        console.log('ProductList render');

        return (
            <View>
                <Text style={ {fontSize: 30}}> Product List </Text>

                <FlatList data={this.state.products}
                          keyExtractor={this.productKeyExtractor}
                          renderItem={ ( {item} )=> (
                                <ProductItem item={item}  />
                          )} >
                          
                </FlatList>
            </View>
        )
    }
}
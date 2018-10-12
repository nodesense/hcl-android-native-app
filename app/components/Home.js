// app/components/Home.js
import React from 'react';

import {View, Text, Button, Alert, ScrollView} from 'react-native';

// Metro Bundler, build bundles {ios bundle, android bundle}
// bunderl automatically pick  .ios.js or .android.js the file based on the platform
import About from './About';

export default class Home extends React.Component{
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);
    }

    gotoPage = (pageName) => {
        // navigation is inserted by react navigation library
        const params = {
            coupon: 'Save50',
            fromScreen: 'Home',
            address: { city: 'BLR', state: 'KA'}
        }
        this.props.navigation.navigate(pageName, params)
    }
   
    render() {
        console.log('Home render');
 
        return (
            <View>
                <ScrollView>
                <Text style={ {fontSize: 30}}> Home </Text>
                <Button title="Cart" 
                        onPress={ () => this.gotoPage('Cart')} />

                 {/* <Button title="Login" 
                        onPress={ () => this.gotoPage('Login')} />

                 <Button title="Profile" 
                        onPress={ () => this.gotoPage('Profile')} /> */}

                <Button title="Checkout" 
                        onPress={ () => this.gotoPage('Checkout')} />

                <Button title="ReduxCounter" 
                        onPress={ () => this.gotoPage('ReduxCounter')} />

                

                <Button title="ReduxFuncCounter" 
                        onPress={ () => this.gotoPage('ReduxFuncCounter')} />


                <Button title="Counter" 
                        onPress={ () => this.gotoPage('Counter')} />

                
                <Button title="Geolocation" 
                        onPress={ () => this.gotoPage('Geolocation')} />

                 <Button title="FileSys" 
                        onPress={ () => this.gotoPage('FileSys')} />

                <Button title="SqliteAccess" 
                        onPress={ () => this.gotoPage('SqliteAccess')} />
                
                <Button title="Camera" 
                        onPress={ () => this.gotoPage('Camera')} />

                <About />
                </ScrollView>
            </View>
        )
    }
}
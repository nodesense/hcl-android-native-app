// app/App.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import {NavigationActions, DrawerActions} from 'react-navigation';

// fixme: move to index.js
// to pass store as context to all the containers component
import {Provider} from 'react-redux';
import store from './store';

import Counter from './components/Counter';
import Address from './components/Address';
import Cart from './containers/Cart';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
import ReduxCounter from './components/ReduxCounter';

import ReduxFuncCounter from './containers/ReduxFuncCounter';

import Profile from './components/Profile';
import Login from './components/Login';

import GeolocationExample from './components/GeolocationExample';
import FileSys from './components/FileSys';
import SqliteAccess from './components/SqliteAccess';

import  Ionicons from 'react-native-vector-icons/Ionicons';


import {createStackNavigator, 
        createBottomTabNavigator,
        createDrawerNavigator
       } from 'react-navigation';

// returns a component
const StackNavigator = createStackNavigator({
  "Home": {
    screen: Home // component
  },

  Cart: {
    screen: Cart,
    //navigationOptions: { title: 'Cart'}
  },
  Checkout: {
    screen: Checkout
  },

  ReduxCounter: {
    screen: ReduxCounter
  },

  ReduxFuncCounter: {
    screen: ReduxFuncCounter
  },
  
  Counter: {
    screen: Counter
  },

  Geolocation: {
    screen: GeolocationExample
  },

  FileSys: {
    screen: FileSys
  },

  SqliteAccess: {
    screen: SqliteAccess
  }
},
    {
      initialRouteName: 'Home',
      /* The header config from HomeScreen is now here */
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    } );

// creates and returns component
const TabNavigator = createBottomTabNavigator({
                  Home: {
                    screen: StackNavigator
                  },

                  ProductList : {
                    screen: ProductList
                  },

                  Cart: {
                    screen: Cart
                  }
              }, 

              {
                navigationOptions: ({ navigation }) => ({
                  tabBarIcon: (props) => {
                    let { focused, horizontal, tintColor } = props;
                    //console.log("**Navigation ", navigation.state)
                    const { routeName } = navigation.state;
                   // console.log('Route name ',routeName)
                    let iconName;

                    if (routeName === 'Home') {
                      iconName = `ios-home${focused ? '' : ''}`;
                    } else if (routeName === 'Cart') {
                      iconName = `ios-cart${focused ? '' : ''}`;
                    } else if (routeName === 'ProductList') {
                      iconName = `ios-list-box${focused ? '' : ''}`;
                    }

                    //console.log('icon name ', iconName);
            
                    // You can return any component that you like here! We usually use an
                    // icon component from react-native-vector-icons
                    return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
                   //  return <Button title="test" onPress={ () => {} } />
                  },
                }),
                tabBarOptions: {
                  activeTintColor: 'red',
                  inactiveTintColor: 'green',
                },
              }

);

const DrawerNavivator = createDrawerNavigator({
  "Home": {
    screen: TabNavigator // component
  },

  Login: {
    screen: Login
  },
  Profile: {
    screen: Profile
  }
})

 

/*
  App is a parent component
  Counter, Address are child components
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true
    }
  }

  toggle = () => {
    this.setState({
      showCounter: !this.state.showCounter
    })
  }
 
  render() {
    return (
      <DrawerNavivator />
    );
  }
}


export default function AppContainer() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

import {requireNativeComponent, View } from 'react-native'
import  PropTypes from 'prop-types';

console.log('Loading ButtonView')

var iface = {
  name: 'ButtonView', // MUST MATCH THE getClass from Java in View Manager
  propTypes: {
    ...View.propTypes,
   textTitle : PropTypes.string, 
   timeoutEvent: PropTypes.func
  },
  nativeOnly: {timeoutEvent: true}
};

export default requireNativeComponent('ButtonView', iface);
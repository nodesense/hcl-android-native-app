// containers/ReduxFuncCounter.js

// help to create container component
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ReduxFuncCounter from '../components/ReduxFuncCounter';

import * as actions from '../state/actions';

// a function, that data/state as props to component
// return list of props needed for component
// param state  = store.getState()
// who call this function? called by container 
// when it is called? 
//          1. when component created very first time
//          2. whenever subscribe occur (subscribe called after every dispatch)
function mapStateToProps(state) {
    console.log('ReduxFuncCounter mapStateToProps')
    return {
        counter: state.counter
    }
}

// return all the functions needed for component as props
// who calls this? called by container 
// when it is called?
//          1. when component created very first time
// param dispatch = store.dispatch;
function mapDispatchToProps(dispatch) {
    console.log('ReduxFuncCounter mapDispatchToProps')

    return {
        // prop Name: function() {}
        // increment: function() {
        //     const action = actions.increment(1);
        //     dispatch(action);
        // },

        //bindActionCreators create and return a wrapper function
        // while calling wrapper func,
        // 1. call action creator
        // 2. automatically dispatch the action
        //increment: bindActionCreators(actions.increment, dispatch)

        // props.actions.{actionFuncName}
        // take group of functions, return group of wrapper functions
        actions: bindActionCreators(actions, dispatch)

        //decrement, //reset later
    }
}

// create container
// containers are component
// containers are pure component
// container subscribe and unsubsribe
// it calls render only when state/props got changed
// it calls render only counter props got changed
// Smart component
// Parent component, wraps ReduxFuncCounter as child
// container takes store as context from Provider component
const ContainerComponent = connect(mapStateToProps, 
                                  mapDispatchToProps) (ReduxFuncCounter);

export default ContainerComponent;
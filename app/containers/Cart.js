// containers/Cart.js

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as actions from '../state/actions';

import Cart from '../components/Cart';

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addRandomItem: function() {
            let id = Math.ceil(10000 + Math.random() * 10000);
            const item = {
                id: id, 
                name: 'Product ' + id,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            const action = actions.addItem(item);
            dispatch(action);
        },

        //actions ={ empty, addItem, removeItem}
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps,
                        mapDispatchToProps ) (Cart);
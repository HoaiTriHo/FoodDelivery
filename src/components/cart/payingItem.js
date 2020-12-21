import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Alert,
    Image,
    SafeAreaView
}
    from 'react-native';
import Styles from './style/stylingCart';
import { connect } from 'react-redux';
import { deleteItem, removeCart } from '../../redux/actions/shoppingCartAction';
import imgCash from '../images/money.png';
import { isEmpty } from 'lodash';
import { ItemOrdering } from './cartGeneral/itemOrdering';


class PayingItem extends React.Component {
    render() {
        return (
            <View style={Styles.bill}>
                <View style={Styles.wrapContent}>
                    <View style={Styles.costFood}>
                        <Text style={Styles.title}>Cost of food ({this.props.numberOfItem} món)</Text>
                        <Text style={Styles.title}>{parseFloat(this.props.totalPrice).toLocaleString('de-DE')}đ</Text>
                    </View>
                    <View style={Styles.costFood}>
                        <Text style={Styles.title}>Delivery fee</Text>
                        <Text style={Styles.title}>{parseFloat(this.props.shipFee).toLocaleString('de-DE')}đ</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const { numberOfItem, totalPrice, shipFee, buttonCancelNone } = state.shoppingCartReducer
    return {
        numberOfItem: numberOfItem,
        totalPrice: totalPrice,
        shipFee: shipFee
    }
}
export default connect(mapStateToProps)(PayingItem);
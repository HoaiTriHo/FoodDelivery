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
import imgCash from '../images/money.png';
import { isEmpty } from 'lodash';
import {confirmCart} from '../../redux/actions/shoppingCartAction';


class CheckOut extends React.Component {
    conFirmOrdering() {
        if (isEmpty(this.props.phone))
            Alert.alert('Please update your phone before continue')
        else{
            //this.props.navigation.navigate('searchRider');
            this.props.dispatch(confirmCart(true));
            this.props.navigation.navigate('mainScreen');
        }
    }
    render() {
        const TOTAL_MONEY = (parseFloat(this.props.totalPrice) + parseFloat(this.props.shipFee)).toLocaleString('de-DE');
        return (
            <View style={Styles.total}>
                <View style={Styles.wrapContent}>
                    <View style={Styles.totalPriceWrap}>
                        <Text style={Styles.title}>Total: <Text style={Styles.totalPrice}>{TOTAL_MONEY}đ</Text></Text>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert('Sorry! Currently we only accept cash')
                            }}
                            style={Styles.btnCash}>
                            <Image style={Styles.imgCash} source={imgCash} />
                            <Text style={Styles.textCash}>Cash</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={this.conFirmOrdering.bind(this)}
                        style={Styles.btnOrder}>
                        <Text style={Styles.textOrder}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const { totalPrice, shipFee, phone } = state.shoppingCartReducer
    return {
        totalPrice: totalPrice,
        shipFee: shipFee,
        phone: phone
    }
}
export default connect(mapStateToProps)(CheckOut);
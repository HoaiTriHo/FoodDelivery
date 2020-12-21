import React from 'react';
import {
    SafeAreaView,
    View
}
    from 'react-native';
import { connect } from 'react-redux';
import Title from './cartGeneral/title';
import GetOrderingAddress from './getOrderingAddress';
import Styles from './style/stylingCart';
import ListOrderingItem from './listOrderingItem';
import PayingItem from './payingItem';
import CheckOut from './checkOut';
import EmptyCart from './emptyCart';

const CartScreen = ({ numberOfItem, navigation, overlay}) => {
    if (numberOfItem > 0)
        return (
            <SafeAreaView style={Styles.container}>
                <Title navigation={navigation} />
                <GetOrderingAddress navigation={navigation} />
                <ListOrderingItem navigation={navigation} />
                <PayingItem />
                <CheckOut navigation={navigation}/>

                <View style={overlay ? Styles.screenBackground : null} />
            </SafeAreaView>
        )
    else
        return (
            <SafeAreaView style={Styles.container}>
                <Title navigation={navigation} />
                <EmptyCart />
            </SafeAreaView>
        )
}

const mapStateToProps = state => {
    const { buttonCancelNone, numberOfItem, overlay } = state.shoppingCartReducer;
    return {
        buttonCancelNone: buttonCancelNone,
        numberOfItem: numberOfItem,
        overlay: overlay
    }
}
export default connect(mapStateToProps)(CartScreen);